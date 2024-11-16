import React, { useState,  useEffect, useLayoutEffect, useCallback } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { GiftedChat, Bubble, Send, InputToolbar } from 'react-native-gifted-chat'; 
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore';
import { auth, database } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../colors'; 
  
export default function Allianz() { 
    const [messages, setMessages] = useState([]); 
    const navigation = useNavigation(); 
  
    useLayoutEffect(() => { 
        const collectionRef = collection(database, 'allianz'); 
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
        addDoc(collection(database, 'allianz'), { 
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
                    }
                }}
            />
        );
    };

    const customtInputToolbar = props => {
        return (
            <InputToolbar
              {...props}
              containerStyle={{
                backgroundColor: "white",
                color: 'whiteaeqwe'
              }}
              textInputProps={{
                autoFocus: true, // garante o foco automático no input
            }}
            />
        );
      };

    const renderSend = (props) => {
        return (
          <Send {...props}>
            <View>
                <Ionicons name="send" size={24} color="red" style={{marginBottom: 7, marginRight: 5, marginLeft: 5}} />
            </View>
          </Send>
        );
      };
  
    return (
        <GiftedChat
            messages={messages} 
            showAvatarForEveryMessage={false} 
            showUserAvatar={false} 
            onSend={messages => onSend(messages)}
            placeholder='Escreva algo...'
            alwaysShowSend={true}
            renderInputToolbar={props => customtInputToolbar(props)}
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
