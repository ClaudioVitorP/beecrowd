const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let salario = parseFloat(lines.shift());

let porcentagem = 0;

if (salario <= 400.00) {
    porcentagem = 15 / 100;
} else if (salario <= 800.00) {
    porcentagem = 12 / 100;
} else if (salario <= 1200.00) {
    porcentagem = 10 / 100;
} else if (salario <= 2000.00) {
    porcentagem = 7 / 100;
} else {
    porcentagem = 4 / 100;
}

let salarioNovo = salario + salario * porcentagem;
let reajusteGanho = salarioNovo - salario;

console.log(`Novo salario: ${salarioNovo.toFixed(2)}\nReajuste ganho: ${reajusteGanho.toFixed(2)}\nEm percentual: ${Math.round(porcentagem * 100)} %`);