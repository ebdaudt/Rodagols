import { initializeApp } from "firebase/app";
import { getAuth, deleteUser, sendPasswordResetEmail, signOut } from "firebase/auth";
// Importa a função a instância do Firestore (banco de dados)
import { getFirestore } from "firebase/firestore";


// credenciais do projeto
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

// Função assíncrona para excluir o usuário autenticado atualmente
export const excluirUsuario = async () => {
    // Obtém a instância de autenticação do Firebase
    const auth = getAuth();
  
    // Obtém o usuário atualmente autenticado
    const usuarioAtual = auth.currentUser;
  
    // Verifica se há um usuário autenticado
    if (usuarioAtual) {
        try {
            // Tenta excluir o usuário autenticado
            await deleteUser(usuarioAtual);
        } catch (error) {
            console.error("Erro ao excluir usuário:", error)
        }
    }
  };
  
// Redefinir senha

// Função assíncrona para redefinir a senha do usuário autenticado
export const redefinirSenha = async () => {
    // Verifica se há um usuário atualmente autenticado
    if (auth.currentUser) {
        try {
            // Envia um e-mail de redefinição de senha para o endereço de e-mail do usuário autenticado
            await sendPasswordResetEmail(auth, auth.currentUser.email);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível enviar o e-mail de redefinição de senha.");
        }
    }
  };
  

// Sair

// Função para realizar o logout do usuário autenticado
export const onSignOut = () => { 
    // Chama o método signOut do Firebase para desconectar o usuário
    signOut(auth)
        .catch(error => console.log('Error logging out: ', error));
};


// Instância da autenticação do Firebase, utilizada para gerenciar usuários e suas sessões
export const auth = getAuth();

// Instância do Firestore, o banco de dados utilizado para armazenar informações do aplicativo
export const database = getFirestore();
