
// sua-biblioteca.js
(function (root, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // Node.js
    module.exports = factory();
  } else {
    // Navegador
    root.suaBiblioteca = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  // Defina sua biblioteca aqui

  var suaBiblioteca = {
    // Implemente suas funções e métodos aqui
    formatarMoeda: function (valor, moeda) {
      const formatosMoeda = {
        'BRL': {
          simbolo: 'R$',
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
  
      if (typeof valor !== 'number') {
        throw new Error('O valor fornecido não é um número.');
      }
  
      if (!formatosMoeda[moeda]) {
        throw new Error('Moeda não suportada.');
      }
  
      const formato = formatosMoeda[moeda];
      const valorFormatado = valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: moeda,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  
      // Substitui o símbolo e os separadores pelos definidos no objeto formatosMoeda
      return valorFormatado
        .replace(formato.simbolo, `${formato.simbolo} `)
        .replace(/\./g, formato.separadorMilhares)
        .replace(/,/g, formato.separadorDecimal);
    }
  };

  return suaBiblioteca;
});

