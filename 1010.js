const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [ codigo1, quantidade1, valor1 ] = lines.shift().split(" ");
let [ codigo2, quantidade2, valor2 ] = lines.shift().split(" ");

codigo1 = parseInt(codigo1)
quantidade1 = parseInt(quantidade1);
valor1 = parseFloat(valor1);

codigo2 = parseInt(codigo2)
quantidade2 = parseInt(quantidade2);
valor2 = parseFloat(valor2);

let total = (quantidade1 * valor1 + quantidade2 * valor2);

console.log("VALOR A PAGAR: R$ "+ total.toFixed(2));
