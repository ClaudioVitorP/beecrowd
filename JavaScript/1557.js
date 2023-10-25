const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let numbers = function(texto) { return lines.shift();};
let tamanho = parseInt(numbers());

while ( tamanho > 0) {
  let t = Math.pow(4, tamanho - 1);
  t = t.toFixed(0).length;

  for (let l = 0; l < tamanho; l++) {
    let line = [];

    for (let c = 0; c < tamanho; c++) {
      let aux = Math.pow(2, l + c).toFixed(0);

      line.push(aux.padStart(t));
    }

    console.log(line.join(" "));
  }

  console.log("");
  tamanho = parseInt(numbers());
}