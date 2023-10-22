const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let salario = parseFloat(lines.shift());
let valorApagar = 0.0;

if (salario <= 2000.00) {
    console.log("Isento");
} else {
    let restoDoSalario = salario - 2000.00;

    if (salario <= 3000.00) {
        valorApagar = restoDoSalario * 0.08; 
    } else if (salario <= 4500.00) {
        valorApagar = (1000.00 * 0.08) + (restoDoSalario - 1000.00) * 0.18; 
    } else {
        valorApagar = (1000.00 * 0.08) + (1500.00 * 0.18) + (restoDoSalario - 2500.00) * 0.28;
    }
    console.log(`R$ ${valorApagar.toFixed(2)}`);
}
