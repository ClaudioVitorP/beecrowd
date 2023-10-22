const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let nome = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let totalDeVendas = parseFloat(lines.shift());

let comissao = (15/100) * totalDeVendas;
let totalReceber = salarioFixo + comissao;

console.log("TOTAL = R$ " + totalReceber.toFixed(2));