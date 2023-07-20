
// sua-biblioteca.js
(function (root, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // Node.js
    module.exports = factory();
  } else {
    // Navegador
    root.format = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  // Defina sua biblioteca aqui

  var format = {
    // Implemente suas funções e métodos aqui
    formatarMoeda: function (valor, moeda) {
      // Existing currency formats...
      const formatosMoeda = {
        'BRL': {
          simbolo: 'R$',
          separadorDecimal: ',',
          separadorMilhares: '.',
        },
        'RT': { // Custom "RT" currency format
          simbolo: 'RT$',
          separadorDecimal: ',',
          separadorMilhares: '.',
        },
        'USD': {
          simbolo: 'US$',
          separadorDecimal: '.',
          separadorMilhares: ',',
        },
        'EUR': {
          simbolo: '€',
          separadorDecimal: ',',
          separadorMilhares: '.',
        },
        // Adicione outros formatos de moeda aqui, se necessário
      };
  
      if (!formatosMoeda[moeda]) {
        throw new Error('Moeda não suportada.');
      }
  
      const formato = formatosMoeda[moeda];
      const partes = valor.toFixed(2).split('.');
      const valorFormatado = `${formato.simbolo} ${partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, formato.separadorMilhares)}`;
      return `${valorFormatado}${formato.separadorDecimal}${partes[1]}`;
    },
  };

  return format;
});

