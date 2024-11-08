import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { auth, excluirUsuario, redefinirSenha } from "../config/firebase";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { AntDesign } from '@expo/vector-icons';
import { onSignOut } from "../config/firebase";

export default function UserSettings({ navigation }) {
    return(
        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={excluirUsuario} style={{width: 300, height: 50, backgroundColor: '#FF0000', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'white', borderWidth: 1, flexDirection:'row'}}>
                <FontAwesome name="trash-o" size={26} color="white" style={{position: 'absolute', left: 20}} />
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Excluir Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={redefinirSenha} style={{width: 300, height: 50, backgroundColor: '#fcba03', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'white', borderWidth: 1, marginTop: 10, flexDirection:'row'}}>
                <Feather name="edit" size={24} color="white" style={{position: 'absolute', left: 20}}/>
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Redefinir Senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 300, height: 50, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'white', borderWidth: 1, marginTop: 10, flexDirection:'row'}} onPress={onSignOut} >
                <AntDesign name="logout" size={24} color="white" style={{position: 'absolute', left: 20}} />
                <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}
