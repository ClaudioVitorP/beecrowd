const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let valor1 = parseInt(lines.shift());
let valor2 = parseInt(lines.shift());
let valor3 = parseInt(lines.shift());
let valor4 = parseInt(lines.shift());
let valor5 = parseInt(lines.shift());

let newArray = [valor1, valor2, valor3, valor4, valor5];
let contador = 0;

for(let i = 0; i <= newArray.length; i++) {
    if(newArray[i] % 2 === 0 ) {
        contador ++
    }
}

console.log(`${contador} valores pares`);