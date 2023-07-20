(function (global, factory) {
  // Verifica o tipo de ambiente em que estamos (Node.js ou navegador)
  if (typeof module === 'object' && typeof module.exports === 'object') {
    // Estamos no Node.js
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // Caso de uso AMD (por exemplo, RequireJS)
    define([], factory);
  } else {
    // Estamos no navegador, expõe globalmente
    global.formatarMoeda = factory();
  }
})(this, function () {
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
  // Exemplos de uso da função após importação
  console.log(formatarMoeda(100, 'BRL')); // Output: R$ 100,00
  console.log(formatarMoeda(50, 'USD'));  // Output: US$ 50,00
  console.log(formatarMoeda(30, 'EUR'));  // Output: € 30,00

  // Retorna a função formatarMoeda para ser disponibilizada no ambiente correto
  return formatarMoeda;
});
