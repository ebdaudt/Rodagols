import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const backImage = require("../assets/backImage.jpg");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// Login

const onHandleLogin = () => {
    // Verifica se os campos de e-mail e senha não estão vazios
    if (email != "" && password != "") {
        // Tenta realizar o login do usuário com o Firebase Authentication
        signInWithEmailAndPassword(auth, email, password)
            .then(() => console.log("Login success"))
            // Caso ocorra um erro no login, exibe um alerta com a mensagem do erro
            .catch((err) => Alert.alert("Login error", err.message));
    }
};


  return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Entrar</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        
        <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
          <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Entrar</Text>
        </TouchableOpacity>
        
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
          <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Não possui uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{color: '#008000', fontWeight: '600', fontSize: 14}}> Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "#008000", 
    alignSelf: "center",
    paddingBottom: 24,
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#008000', 
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
