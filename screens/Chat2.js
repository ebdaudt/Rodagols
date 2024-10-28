import React, {
    useState,                // Importa o hook useState para gerenciar o estado no componente
    useEffect,               // Importa o hook useEffect para executar efeitos colaterais
    useLayoutEffect,         // Importa o hook useLayoutEffect para layout sincronizado com DOM
    useCallback              // Importa o hook useCallback para memorizar funções
  } from 'react';
  import { TouchableOpacity, Text } from 'react-native'; // Importa componentes do React Native
  import { GiftedChat, Bubble } from 'react-native-gifted-chat'; // Importa componentes da biblioteca GiftedChat para o chat
  import {
    collection,             // Função do Firestore para acessar uma coleção
    addDoc,                 // Função do Firestore para adicionar um documento à coleção
    orderBy,                // Função do Firestore para ordenar resultados de uma consulta
    query,                  // Função do Firestore para criar uma consulta
    onSnapshot              // Função do Firestore para escutar atualizações em tempo real
  } from 'firebase/firestore';
  import { signOut } from 'firebase/auth'; // Importa função para fazer logout do usuário
  import { auth, database } from '../config/firebase'; // Importa as instâncias de autenticação e banco de dados
  import { useNavigation } from '@react-navigation/native'; // Importa o hook useNavigation para navegação
  import { AntDesign } from '@expo/vector-icons'; // Importa ícones da biblioteca Expo Vector Icons
  import colors from '../colors'; // Importa o objeto de cores definido localmente
  
  export default function Arena() { // Define o componente Chat como o padrão exportado
    const [messages, setMessages] = useState([]); // Estado para armazenar as mensagens
    const navigation = useNavigation(); // Hook para acessar a navegação
  
    const onSignOut = () => { // Função para fazer logout do usuário
        signOut(auth).catch(error => console.log('Error logging out: ', error)); // Tenta fazer logout e exibe erro em caso de falha
    };
  
    useLayoutEffect(() => { // Hook que executa código após a montagem do layout
        navigation.setOptions({ // Configurações da barra de navegação
            headerRight: () => ( // Adiciona um botão de logout à direita no cabeçalho
                <TouchableOpacity
                    style={{
                        marginRight: 10 // Margem à direita do botão
                    }}
                    onPress={onSignOut} // Função chamada ao pressionar o botão
                >
                    <AntDesign name="logout" size={24} color={colors.gray} style={{ marginRight: 10 }} />
                </TouchableOpacity>
            )
        });
    }, [navigation]); // Dependência da navegação para reexecutar o efeito quando necessário
  
    useLayoutEffect(() => { // Hook que executa código após a montagem do layout
        const collectionRef = collection(database, 'chats2'); // Referência à coleção 'chats' no Firestore
        const q = query(collectionRef, orderBy('createdAt', 'desc')); // Cria uma consulta para ordenar as mensagens pela data de criação em ordem decrescente
  
        const unsubscribe = onSnapshot(q, querySnapshot => { // Escuta em tempo real as atualizações na coleção 'chats'
            console.log('querySnapshot unsubscribe'); // Log para indicar quando o snapshot é atualizado
            setMessages( // Atualiza o estado das mensagens com os dados do Firestore
                querySnapshot.docs.map(doc => ({ // Mapeia cada documento para o formato esperado pelo GiftedChat
                    _id: doc.data()._id, // ID da mensagem
                    createdAt: doc.data().createdAt.toDate(), // Data de criação da mensagem
                    text: doc.data().text, // Texto da mensagem
                    user: doc.data().user // Dados do usuário que enviou a mensagem
                }))
            );
        });
        return unsubscribe; // Retorna a função de limpeza para parar de escutar as atualizações
    }, []); // Executa apenas uma vez após a montagem do componente
  
    const onSend = useCallback((messages = []) => { // Função chamada ao enviar uma nova mensagem
        setMessages(previousMessages => // Atualiza o estado das mensagens com a nova mensagem
            GiftedChat.append(previousMessages, messages) // Adiciona a nova mensagem à lista existente
        );
        const { _id, createdAt, text, user } = messages[0]; // Desestrutura a primeira mensagem do array
        addDoc(collection(database, 'chats2'), { // Adiciona a nova mensagem à coleção 'chats' no Firestore
            _id, // ID da mensagem
            createdAt, // Data de criação da mensagem
            text, // Texto da mensagem
            user // Dados do usuário que enviou a mensagem
        });
    }, []); // Usa useCallback para memorizar a função e evitar recriação desnecessária
  
    const renderBubble = (props) => { // Função para renderizar o balão de mensagem com estilos personalizados
        return (
            <Bubble
                {...props} // Props do GiftedChat para o balão de mensagem
                wrapperStyle={{
                    right: {
                        backgroundColor: 'red' // Cor de fundo do balão das mensagens enviadas pelo usuário
                    },
                    left: {
                        backgroundColor: '#f0f0f0' // Cor de fundo do balão das mensagens recebidas
                    }
                }}
            />
        );
    };
  
    return (
        <GiftedChat
            messages={messages} // Passa as mensagens para o GiftedChat
            showAvatarForEveryMessage={false} // Não exibe o avatar para cada mensagem
            showUserAvatar={false} // Não exibe o avatar do usuário
            onSend={messages => onSend(messages)} // Chama a função onSend ao enviar uma mensagem
            messagesContainerStyle={{
                backgroundColor: '#fff' // Define a cor de fundo da área de mensagens
            }}
            textInputStyle={{
                backgroundColor: '#fff', // Define a cor de fundo do campo de entrada de texto
                borderRadius: 20, // Define bordas arredondadas para o campo de entrada de texto
            }}
            user={{
                _id: auth?.currentUser?.email, // Define o ID do usuário com base no email do usuário autenticado
                avatar: 'https://i.pravatar.cc/300' // URL do avatar do usuário
            }}
            renderBubble={renderBubble} // Renderiza o balão de mensagem com a função personalizada
        />
    );
  }
  