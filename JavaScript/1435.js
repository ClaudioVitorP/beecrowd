const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptkS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptkS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let numbers =  parseInt(lines.shift());

let vetor = [];
let matriz = [];

while (numbers !== 0) {
  matriz = new Array(numbers);

  for (let i = 0; i < numbers / 2; i++) {
    vetor = new Array(numbers);

    for (let k = 0; k < numbers / 2; k++) {
      const value = Math.min(i, k) + 1;
      vetor[k] = value < 10 ? ` ${value}` : `${value}`; 
      vetor[numbers - 1 - k] = vetor[k];
    }

    matriz[i] = ` ${vetor.join('  ')}`;
    matriz[numbers - 1 - i] = matriz[i];
  }

  console.log(`${matriz.join('\n')}`);
  numbers = parseInt(lines.shift());
  console.log('');
}