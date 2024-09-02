import 'dotenv/config'; // Importa e configura variáveis de ambiente a partir do arquivo .env

export default {
  "expo": {
    "name": "Rodagols", // Nome do aplicativo que será exibido no dispositivo
    "slug": "Rodagols", // Identificador único para o aplicativo
    "version": "1.0.0", // Versão atual do aplicativo
    "orientation": "portrait", // Define a orientação padrão da tela para retrato
    "icon": "./assets/icon.png", // Caminho para o ícone do aplicativo
    "splash": {
      "image": "./assets/splash.png", // Caminho para a imagem da tela inicial
      "resizeMode": "contain", // Modo de redimensionamento da imagem da tela inicial
      "backgroundColor": "#ffffff" // Cor de fundo da tela inicial
    },
    "updates": {
      "fallbackToCacheTimeout": 0 // Define o tempo para fallback de cache em atualizações
    },
    "assetBundlePatterns": [
      "**/*" // Padrão para incluir todos os arquivos no pacote de ativos
    ],
    "ios": {
      "supportsTablet": true // Indica que o aplicativo é compatível com tablets iOS
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png", // Caminho para a imagem de ícone adaptativo
        "backgroundColor": "#000000" // Cor de fundo do ícone adaptativo
      }
    },
    "web": {
      "favicon": "./assets/favicon.png" // Caminho para o favicon do aplicativo na web
    },
    extra: {
      apiKey: process.env.API_KEY, // Chave da API do ambiente
      authDomain: process.env.AUTH_DOMAIN, // Domínio de autenticação do Firebase
      projectId: process.env.PROJECT_ID, // ID do projeto Firebase
      storageBucket: process.env.STORAGE_BUCKET, // Bucket de armazenamento do Firebase
      messagingSenderId: process.env.MESSAGING_SENDER_ID, // ID do remetente de mensagens do Firebase
      appId: process.env.APP_ID // ID do aplicativo Firebase
    }
  }
}
