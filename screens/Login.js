// Importa o React e o hook useState do React
import React, { useState } from "react";
// componentes do React Native para estilização e layout
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
// autenticação por email e senha
import { signInWithEmailAndPassword } from "firebase/auth";
// autenticação do Firebase
import { auth } from "../config/firebase";

// Imagem de fundo para a tela de login
const backImage = require("../assets/backImage.jpg");

// Declaração do componente funcional Login
export default function Login({ navigation }) {
  // Cria um estado para armazenar o email digitado pelo usuário
  const [email, setEmail] = useState("");
  // Cria um estado para armazenar a senha digitada pelo usuário
  const [password, setPassword] = useState("");

  // Função que é chamada quando o botão de login é pressionado
  const onHandleLogin = () => {
    // Verifica se o email e a senha não estão vazios
    if (email != "" && password != "") {
      // Realiza o login usando a função de autenticação do Firebase
      signInWithEmailAndPassword(auth, email, password)
        // Se o login for bem-sucedido, exibe uma mensagem no console
        .then(() => console.log("Login success"))
        // Se ocorrer um erro, exibe um alerta com a mensagem de erro
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
  
  // Retorna a interface de usuário do componente
  return (
    <View style={styles.container}>
      {/* Exibe a imagem de fundo na tela de login */}
      <Image source={backImage} style={styles.backImage} />
      {/* Adiciona uma camada branca sobre a imagem de fundo */}
      <View style={styles.whiteSheet} />
      {/* Define uma área segura para o formulário, evitando sobreposição com a barra de status */}
      <SafeAreaView style={styles.form}>
        {/* Exibe o título da tela de login */}
        <Text style={styles.title}>Entrar</Text>
        
        {/* Campo de entrada para o email */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          // Atualiza o estado do email com o valor digitado
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
          // Atualiza o estado da senha com o valor digitado
          onChangeText={(text) => setPassword(text)}
        />
        
        {/* Botão que chama a função de login quando pressionado */}
        <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
          {/* Texto dentro do botão de login */}
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Entrar</Text>
        </TouchableOpacity>
        
        {/* Seção para redirecionar o usuário para a tela de cadastro, se ele não tiver uma conta */}
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
          <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Não possui uma conta? </Text>
          {/* Botão que redireciona para a tela de cadastro */}
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{color: 'red', fontWeight: '600', fontSize: 14}}> Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
      {/* Configura o estilo da barra de status para ter um conteúdo claro */}
      <StatusBar barStyle="light-content" />
    </View>
  );
}

// Define os estilos utilizados no componente
const styles = StyleSheet.create({
  // Estilo para o contêiner principal
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // Estilo para o título da tela de login
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
  // Estilo para o formulário
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  // Estilo para o botão de login
  button: {
    backgroundColor: 'red', 
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
