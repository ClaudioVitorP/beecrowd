const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let valor1 = parseInt(lines.shift());
let valor2 = parseInt(lines.shift());

if(valor1 > valor2) {
    let intervalo = valor2;
    valor2 = valor1;
    valor1 = intervalo; 
}

let soma = 0
valor1 += 1

while (valor2 > valor1) {
    if( valor1 % 2 !== 0) {
        soma += valor1;
    }
    valor1++;
}

console.log(soma);
