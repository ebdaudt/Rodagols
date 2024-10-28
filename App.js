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
import Home from './screens/Home';

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
