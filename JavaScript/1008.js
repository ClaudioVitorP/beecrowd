const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let numeroFormulario = lines.shift();
let horasTrabalhadas = lines.shift();
let valorPorHora = lines.shift();


let salario = (horasTrabalhadas * valorPorHora);


console.log("NUMBER = " + numeroFormulario + "\nSALARY = U$ " + salario.toFixed(2));