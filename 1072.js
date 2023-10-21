const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let valor = lines.shift()
let dentro = 0
let fora = 0

for (let i = 0; i < valor; i++) {
    let numero = parseInt(lines.shift())
    if (numero >= 10 && numero <= 20) {
        dentro += 1
    } else {
        fora += 1
    }
}

console.log(`${dentro} in\n${fora} out`);