import { initializeApp } from "firebase/app";

import { getAuth, deleteUser, sendPasswordResetEmail, signOut } from "firebase/auth";

import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCZe0ByhuglrlHEpvZBVVWOC1KSak30tC4", 
  authDomain: "rodagols.firebaseapp.com", 
  projectId: "rodagols", 
  storageBucket: "rodagols.appspot.com", 
  messagingSenderId: "234229292487", 
  appId: "1:234229292487:web:ce9d6a10707f10537b0de2" 
};

initializeApp(firebaseConfig);

// Excluir usuario

// Função para excluir o usuário autenticado
export const excluirUsuario = async () => {
    // Obtém a autenticação do Firebase
    const auth = getAuth();
  
    const usuarioAtual = auth.currentUser;
  
    // Verifica se existe um usuário autenticado
    if (usuarioAtual) {
        try {
            // Tenta excluir o usuário atual do Firebase
            await deleteUser(usuarioAtual);
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    }
  };
  
// Redefinir senha

// Função para redefinir a senha do usuário autenticado
export const redefinirSenha = async () => {
    // Verifica se há um usuário atualmente autenticado no Firebase
    if (auth.currentUser) {
        try {
            // Envia um e-mail de redefinição de senha para o e-mail do usuário autenticado
            await sendPasswordResetEmail(auth, auth.currentUser.email);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível enviar o e-mail de redefinição de senha.");
        }
    }
  };
  

// Sair
export const onSignOut = () => { 
    signOut(auth).catch(error => console.log('Error logging out: ', error)); 
};

export const auth = getAuth();

export const database = getFirestore();
