// Exporta uma função que configura o Babel para o projeto
module.exports = function(api) {
  // Habilita o cache para melhorar o desempenho
  api.cache(true);

  // Retorna a configuração do Babel
  return {
    // Define os presets do Babel a serem utilizados
    presets: ['babel-preset-expo'],
  };
};
