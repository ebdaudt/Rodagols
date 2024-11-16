import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import Login from './screens/Login';
import Signup from './screens/Signup';
import BeiraRio from './screens/Chat';
import Arena from './screens/Chat2';
import Alfredo from './screens/Alfredo';
import Allianz from './screens/Allianz';
import Antonio from './screens/Antonio';
import Barradao from './screens/Barradao';
import Castelao from './screens/Castelao';
import Fonte from './screens/Fonte';
import Heriberto from './screens/Heriberto';
import Januario from './screens/Januario';
import Ligga from './screens/Ligga';
import Maracana from './screens/Maracana';
import Maracana2 from './screens/Maracana2';
import Mineirao from './screens/Mineirao';
import Morumbis from './screens/Morumbis';
import MRV from './screens/MRV';
import Nabi from './screens/Nabi';
import Nilton from './screens/Nilton';
import Pantanal from './screens/Pantanal';
import Quimica from './screens/Quimica';
import Home from './screens/Home';
import UserSettings from './screens/UserSettings';

// Cria um Stack Navigator
const Stack = createStackNavigator();

// Cria um Contexto para armazenar o estado do usuário autenticado
const AuthenticatedUserContext = createContext({});

// Provider que encapsula o estado do usuário autenticado
const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

// Navegação das telas para usuários autenticados
function ChatStack() {
  return (
    <Stack.Navigator defaultScreenOptions={Home}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='BeiraRio' component={BeiraRio} options={{ title: 'Beira-Rio' }} />
      <Stack.Screen name='Arena' component={Arena} />
      <Stack.Screen name='Alfredo' component={Alfredo} />
      <Stack.Screen name='Heriberto' component={Heriberto} />
      <Stack.Screen name='Ligga' component={Ligga} />
      <Stack.Screen name='MRV' component={MRV} />
      <Stack.Screen name='Mineirao' component={Mineirao} />
      <Stack.Screen name='Morumbis' component={Morumbis} />
      <Stack.Screen name='Allianz' component={Allianz} />
      <Stack.Screen name='Quimica' component={Quimica} />
      <Stack.Screen name='Nabi' component={Nabi} />
      <Stack.Screen name='Maracana' component={Maracana} />
      <Stack.Screen name='Maracana2' component={Maracana2} />
      <Stack.Screen name='Nilton' component={Nilton} />
      <Stack.Screen name='Januario' component={Januario} />
      <Stack.Screen name='Fonte' component={Fonte} />
      <Stack.Screen name='Castelao' component={Castelao} />
      <Stack.Screen name='Barradao' component={Barradao} />
      <Stack.Screen name='Pantanal' component={Pantanal} />
      <Stack.Screen name='Antonio' component={Antonio} />
      <Stack.Screen name='UserSettings' component={UserSettings}  options={{ title: 'Configurações' }} />
    </Stack.Navigator>
  );
}

// Navegação das telas para usuários não autenticados
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  );
}

// Componente principal de navegação baseado no estado de autenticação
function RootNavigator() {
  // Obtém o contexto do usuário e o estado de carregamento
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Assina as mudanças no estado de autenticação do Firebase
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        // Atualiza o estado do usuário e define o carregamento como concluído
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    
    // Limpa a assinatura quando o componente for desmontado
    return unsubscribeAuth;
  }, [user]);

  if (isLoading) {
    // Exibe um indicador de carregamento enquanto verifica o estado de autenticação
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  // Renderiza a navegação apropriada com base no estado do usuário
  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

// Componente principal da aplicação
export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
