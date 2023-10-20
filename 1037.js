const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let valorDeEntrada = parseFloat(lines.shift());

if (valorDeEntrada < 0.0 || valorDeEntrada > 100.0) {
    console.log("Fora de intervalo")
} else if (valorDeEntrada <= 25) {
    console.log("Intervalo [0,25]")
} else if (valorDeEntrada <= 50) {
    console.log("Intervalo (25,50]")
} else if (valorDeEntrada <= 75) {
    console.log("Intervalo (50, 75]")
} else if (valorDeEntrada <= 100) {
    console.log("Intervalo (75,100]")
}