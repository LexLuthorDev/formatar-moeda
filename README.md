# Formatador de Moeda

O Formatador de Moeda é uma biblioteca JavaScript simples para formatar valores monetários em diferentes formatos de moeda. Ele permite que você converta números em formatos legíveis por humanos, com símbolos de moeda, separadores de milhares e decimais adequados para diferentes moedas.

## Instalação

Para utilizar esta biblioteca em seu projeto, você pode instalá-la via npm:

```bash
npm i formatar-moeda

Como usar
Aqui está um exemplo básico de como você pode usar a biblioteca para formatar valores monetários:

const { formatarMoeda } = require('formatar-moeda');

const valor = 123456.78;
const moeda = 'BRL';

const valorFormatado = formatarMoeda(valor, moeda);
console.log(valorFormatado); // Output: R$ 123.456,78

Opções de Moeda
A biblioteca suporta várias opções de moeda. Aqui estão algumas das moedas suportadas e seus códigos:

BRL: Real Brasileiro
USD: Dólar Americano
EUR: Euro
... (adicionar outras moedas, se necessário)
API
formatarMoeda(valor, moeda)
valor (number): O valor numérico a ser formatado.
moeda (string): O código da moeda para a qual você deseja formatar o valor.
Retorna o valor formatado como uma string, com o símbolo de moeda e os separadores corretos.

Contribuindo
Se você encontrar algum problema, tiver sugestões de melhorias ou quiser adicionar suporte para mais moedas, sinta-se à vontade para contribuir para este projeto. Abra um problema ou envie um pull request no GitHub.

Licença
Este projeto é licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.
