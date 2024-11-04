import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, excluirUsuario, redefinirSenha } from "../config/firebase";

export default function UserSettings({ navigation }) {
    return(
        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={excluirUsuario} style={{width: 300, height: 50, backgroundColor: '#800080', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'white', borderWidth: 1}}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Excluir Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={redefinirSenha} style={{width: 300, height: 50, backgroundColor: '#fcba03', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'white', borderWidth: 1, marginTop: 10}}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Redefinir Senha</Text>
            </TouchableOpacity>
        </View>

);

}
