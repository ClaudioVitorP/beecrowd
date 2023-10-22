const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let x = parseInt(lines.shift());

for (let i = x, count = 0; count < 6; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        count++;
    }
}
