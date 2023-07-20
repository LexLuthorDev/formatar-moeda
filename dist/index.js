(function (global, factory) {
  // Verifica se estamos no ambiente do Node.js (CommonJS)
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = factory();
  } else {
    // Estamos no navegador ou ambiente AMD
    global.formatarMoeda = factory();
  }
})(typeof window !== 'undefined' ? window : this, function () {
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

  // Retorna a função formatarMoeda para ser disponibilizada no ambiente correto
  return formatarMoeda;
});
