const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let n = parseInt(lines.shift());

for( let i = 2; i <= n; i+= 2){
    console.log(`${i}^2 = ${Math.pow( i, 2).toFixed(0)}`);
}