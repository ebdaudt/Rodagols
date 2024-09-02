// Importa a função para inicializar o Firebase
import { initializeApp } from "firebase/app";
// Importa a função para obter a instância de autenticação
import { getAuth } from "firebase/auth";
// Importa a função para obter a instância do Firestore (banco de dados)
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase com as credenciais do projeto
const firebaseConfig = {
  apiKey: "AIzaSyCZe0ByhuglrlHEpvZBVVWOC1KSak30tC4", // Chave da API do Firebase
  authDomain: "rodagols.firebaseapp.com", // Domínio de autenticação
  projectId: "rodagols", // ID do projeto Firebase
  storageBucket: "rodagols.appspot.com", // URL do bucket de armazenamento
  messagingSenderId: "234229292487", // ID do remetente para Firebase Cloud Messaging
  appId: "1:234229292487:web:ce9d6a10707f10537b0de2" // Identificador único do app
};

// Inicializa o Firebase com a configuração fornecida
initializeApp(firebaseConfig);

// Exporta a instância de autenticação para ser utilizada em outras partes do app
export const auth = getAuth();
// Exporta a instância do Firestore para realizar operações no banco de dados
export const database = getFirestore();
