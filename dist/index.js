(function (global) {
  function formatarMoeda(valor, moeda) {
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

  // Exporta a função formatarMoeda dependendo do ambiente (Node.js ou Navegador)
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    // Ambiente Node.js (backend)
    module.exports = formatarMoeda;
  } else if (typeof define === 'function' && define.amd) {
    // Ambiente AMD (ex: RequireJS)
    define([], function () {
      return formatarMoeda;
    });
  } else {
    // Ambiente Navegador (front-end)
    global.formatarMoeda = formatarMoeda;
  }
})(this);
