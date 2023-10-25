const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let n = parseInt(lines.shift());

for (let i = 0; i < n; i++){
    let numero = parseInt(lines.shift());

    if (numero === 0){ console.log(`NULL`) }
    else if (numero>0){
     numero % 2 === 0? console.log(`EVEN POSITIVE`) : console.log(`ODD POSITIVE`)
    }else{
     numero % 2 === 0? console.log(`EVEN NEGATIVE`) : console.log(`ODD NEGATIVE`)
    }
}