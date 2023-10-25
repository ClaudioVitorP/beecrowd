const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let numbers = function(texto) { return lines.shift();};
let tamanho = parseInt(numbers());

while (tamanho > 0) {
    for (let i = 0; i < tamanho; i++) {
        let line = [];

        for ( let q = 0; q < tamanho; q++) {
            let expressao = (1 + Math.abs(i - q)).toFixed(0);
            line.push(expressao.padStart(3));
        }
        console.log(line.join(" "));
    }

    console.log("");
    tamanho = parseInt(numbers());
}