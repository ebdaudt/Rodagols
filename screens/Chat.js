import React, { useState,  useEffect, useLayoutEffect, useCallback } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { GiftedChat, Bubble, Send, InputToolbar } from 'react-native-gifted-chat'; 
import { collection, addDoc, orderBy, query, onSnapshot } from 'firebase/firestore';
import { auth, database } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../colors'; 
  
export default function BeiraRio() { 
    const [messages, setMessages] = useState([]); 
    const navigation = useNavigation(); 
  
    
  // Função que carrega as mensagens do Firestore e as exibe no chat
useLayoutEffect(() => { 
    // Obtém a coleção "chats"
    const collectionRef = collection(database, 'chats'); 

    // Cria uma consulta (query) para obter as mensagens ordenadas
    const q = query(collectionRef, orderBy('createdAt', 'desc')); 

    // Inscreve-se para escutar as mudanças em tempo real na coleção de chats
    const unsubscribe = onSnapshot(q, querySnapshot => { 
        console.log('querySnapshot unsubscribe');
        // Mapeia os documentos retornados pela consulta e atualiza o estado das mensagens
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

  
// Função para mandar mensagem para o firebase
    
 // Função quando o usuário envia uma nova mensagem
const onSend = useCallback((messages = []) => { 
    // Atualiza o estado das mensagens, adicionando a nova mensagem ao final da lista de mensagens
    setMessages(previousMessages => 
        GiftedChat.append(previousMessages, messages) // `GiftedChat.append` adiciona as novas mensagens ao histórico
    );

    // Desestrutura os dados da mensagem que foi enviada
    const { _id, createdAt, text, user } = messages[0]; 

    // Adiciona a nova mensagem à coleção 'chats' no Firestore
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
                autoFocus: true, 
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
