// Importa a função getDefaultConfig do pacote @expo/metro-config
const { getDefaultConfig } = require("@expo/metro-config");

// Obtém a configuração padrão do Metro bundler para o diretório atual
const defaultConfig = getDefaultConfig(__dirname);

// Adiciona "cjs" à lista de extensões de ativos que o Metro bundler deve reconhecer
defaultConfig.resolver.assetExts.push("cjs");

// Exporta a configuração modificada para que o Metro bundler a utilize
module.exports = defaultConfig;
