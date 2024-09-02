// Importa os módulos necessários do React e do React Native
import React, { useState } from 'react';
// Importa os componentes do React Native para estilização e interação
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
// Importa a função de criação de usuário com email e senha do Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
// Importa a instância de autenticação configurada no Firebase
import { auth } from '../config/firebase';

// Importa a imagem de fundo
const backImage = require("../assets/backImage.jpg");

// Componente principal para a tela de cadastro
export default function Signup({ navigation }) {

  // Estados para armazenar o email e a senha digitados pelo usuário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o registro do usuário
  const onHandleSignup = () => {
    // Verifica se os campos de email e senha não estão vazios
    if (email !== '' && password !== '') {
      // Cria um novo usuário com email e senha usando o Firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Signup success')) // Registro bem-sucedido, exibe uma mensagem no console
        .catch((err) => Alert.alert("Login error", err.message)); // Exibe um alerta em caso de erro
    }
  };
  
  // Retorna a interface de usuário da tela de cadastro
  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <Image source={backImage} style={styles.backImage} />
      {/* Camada branca sobre a imagem */}
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        {/* Título da tela */}
        <Text style={styles.title}>Cadastre-se</Text>
        {/* Campo de entrada para o email */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          // Atualiza o estado do email conforme o usuário digita
          onChangeText={(text) => setEmail(text)}
        />
        {/* Campo de entrada para a senha */}
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          // Atualiza o estado da senha conforme o usuário digita
          onChangeText={(text) => setPassword(text)}
        />
        {/* Botão para enviar o formulário de cadastro */}
        <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
          {/* Texto dentro do botão de cadastro */}
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Cadastrar-se</Text>
        </TouchableOpacity>
        {/* Texto para navegação para a tela de login, caso o usuário já tenha uma conta */}
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
          <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Já possui uma conta? </Text>
          {/* Botão que redireciona para a tela de login */}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{color: 'red', fontWeight: '600', fontSize: 14}}> Entrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* Configuração da barra de status */}
      <StatusBar barStyle="light-content" />
    </View>
  );
}

// Estilos para a tela de cadastro
const styles = StyleSheet.create({
  // Estilo para o contêiner principal
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // Estilo para o título da tela
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "red",  
    alignSelf: "center",
    paddingBottom: 24,
  },
  // Estilo para os campos de entrada de texto
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  // Estilo para a imagem de fundo
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  // Estilo para a camada branca sobre a imagem de fundo
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  // Estilo para o formulário de cadastro
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  // Estilo para o botão de cadastro
  button: {
    backgroundColor: 'red',  
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
