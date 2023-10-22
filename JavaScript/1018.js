const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let numeroInt = parseInt(lines.shift());
const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1];

console.log(numeroInt);

for (let i = 0; i < notasDisponiveis.length; i++) {
    let quantidadeDeNotas = Math.floor(numeroInt / notasDisponiveis[i]);
    console.log(quantidadeDeNotas + " nota(s) de R$ " + notasDisponiveis[i] + ",00");
    numeroInt -= quantidadeDeNotas * notasDisponiveis[i];
}