const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let x = parseInt(lines.shift());

if (x >= 1 && x <= 1000) {
    for (let i = 1; i <= x; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
