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

const Stack = createStackNavigator();

const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

// Navegação das telas 
function ChatStack() {
  return (
    <Stack.Navigator defaultScreenOptions={Home}>
      <Stack.Screen name='Home' component={Home} /> 
      <Stack.Screen name='BeiraRio' component={BeiraRio} options={{ title: 'Beira-Rio' }} />
      <Stack.Screen name='Arena' component={Arena} />
      <Stack.Screen name='Alfredo' component={Alfredo} options={{ title: 'Alfredo Jaconi' }}/>
      <Stack.Screen name='Heriberto' component={Heriberto} options={{ title: 'Heriberto Hulse' }}/>
      <Stack.Screen name='Ligga' component={Ligga} options={{ title: 'Beira Rio' }}/>
      <Stack.Screen name='MRV' component={MRV} options={{ title: 'Arena MRV' }}/>
      <Stack.Screen name='Mineirao' component={Mineirao} />
      <Stack.Screen name='Morumbis' component={Morumbis} />
      <Stack.Screen name='Allianz' component={Allianz} options={{ title: 'Allianz Parque' }}/>
      <Stack.Screen name='Quimica' component={Quimica} options={{ title: 'NEO Química Arena' }}/>
      <Stack.Screen name='Nabi' component={Nabi} options={{ title: 'Nabi Abi Chedid' }}/>
      <Stack.Screen name='Maracana' component={Maracana} options={{ title: 'Maracanã Fluminense' }}/>
      <Stack.Screen name='Maracana2' component={Maracana2} options={{ title: 'Maracanã Flamengo' }}/>
      <Stack.Screen name='Nilton' component={Nilton} options={{ title: 'Nilton Santos' }}/>
      <Stack.Screen name='Januario' component={Januario} options={{ title: 'São Januário' }}/>
      <Stack.Screen name='Fonte' component={Fonte} options={{ title: 'Fonte Nova' }}/>
      <Stack.Screen name='Castelao' component={Castelao} />
      <Stack.Screen name='Barradao' component={Barradao} options={{ title: 'Barradão' }}/>
      <Stack.Screen name='Pantanal' component={Pantanal} options={{ title: 'Arena Pantanal' }}/>
      <Stack.Screen name='Antonio' component={Antonio} options={{ title: 'Antonio Accioly' }}/>
      <Stack.Screen name='UserSettings' component={UserSettings}  options={{ title: 'Configurações' }} />
    </Stack.Navigator>
  );
}

// Login

// Função AuthStack define a navegação entre as telas de login e cadastro
function AuthStack() {
  return (
    // Configura o Stack Navigator para não exibir cabeçalho nas telas
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      // Tela de Login: será exibida quando o usuário acessar a página de login
      <Stack.Screen name='Login' component={Login} />
      
      // Tela de Signup (Cadastro): será exibida quando o usuário acessar a página de cadastro
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  );
}


function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
    
    return unsubscribeAuth;
  }, [user]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
