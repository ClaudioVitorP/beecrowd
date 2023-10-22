const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let valor = parseFloat(lines.shift()) * 100;

function calcularNotasEMoedas(valor) {
    const notas = [10000, 5000, 2000, 1000, 500, 200];
    const moedas = [100, 50, 25, 10, 5, 1];

    console.log("NOTAS:");

    for (let i = 0; i < notas.length; i++) {
        let quantidadeDeNotas = Math.floor(valor / notas[i]);
        console.log(quantidadeDeNotas + " nota(s) de R$ " + (notas[i] / 100).toFixed(2));
        valor %= notas[i];
    }

    console.log("MOEDAS:");

    for (let i = 0; i < moedas.length; i++) {
        let quantidadeDeMoedas = Math.floor(valor / moedas[i]);
        console.log(quantidadeDeMoedas + " moeda(s) de R$ " + (moedas[i] / 100).toFixed(2));
        valor %= moedas[i];
    }
}

calcularNotasEMoedas(valor);