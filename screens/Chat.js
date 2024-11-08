import React, {
    useState,                
    useEffect,               
    useLayoutEffect,         
    useCallback              
} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'; 
import {
    collection,             
    addDoc,                 
    orderBy,                
    query,                  
    onSnapshot              
} from 'firebase/firestore';
import { auth, database } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors'; 
  
export default function BeiraRio() { 
    const [messages, setMessages] = useState([]); 
    const navigation = useNavigation(); 
  
  
    useLayoutEffect(() => { 
        const collectionRef = collection(database, 'chats'); 
        const q = query(collectionRef, orderBy('createdAt', 'desc')); 
  
        const unsubscribe = onSnapshot(q, querySnapshot => { 
            console.log('querySnapshot unsubscribe');
            setMessages( 
                querySnapshot.docs.map(doc => ({ 
                    _id: doc.data()._id, 
                    createdAt: doc.data().createdAt.toDate(), 
                    text: doc.data().text, 
                    user: doc.data().user 
                }))
            );
        });
        return unsubscribe; 
    }, []); 
  
    const onSend = useCallback((messages = []) => { 
        setMessages(previousMessages => 
            GiftedChat.append(previousMessages, messages) 
        );
        const { _id, createdAt, text, user } = messages[0]; 
        addDoc(collection(database, 'chats'), { 
            _id, 
            createdAt, 
            text, 
            user 
        });
    }, []); 
  
    const renderBubble = (props) => { 
        return (
            <Bubble
                {...props} 
                wrapperStyle={{
                    right: {
                        backgroundColor: colors.red 
                    },
                    left: {
                        backgroundColor: colors.mediumGray, 
                        borderWidth: 1, 
                        borderColor: colors.gray 
                    }
                }}
            />
        );
    };

    const renderSend = (props) => {
        const { text, onSend } = props;
        return (
            text.trim().length > 0 && (
                <TouchableOpacity onPress={() => onSend({ text: text.trim() }, true)} style={{ padding: 10 }}>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>Send</Text>
                </TouchableOpacity>
            )
        );
    };
  
    return (
        <GiftedChat
            messages={messages} 
            showAvatarForEveryMessage={false} 
            showUserAvatar={false} 
            onSend={messages => onSend(messages)} 
            messagesContainerStyle={{
                backgroundColor: colors.lightGray 
            }}
            textInputStyle={{
                backgroundColor: '#fff', 
                borderRadius: 15, 
                borderWidth: 1, 
                borderColor: colors.gray
            }}
            user={{
                _id: auth?.currentUser?.email, 
                avatar: 'https://i.pravatar.cc/300' 
            }}
            renderBubble={renderBubble} 
            renderSend={renderSend} 
        />
    );
}
