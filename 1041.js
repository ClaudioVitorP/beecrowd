const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [x, y] = lines.shift().split(' ');

x = parseFloat(x);
y = parseFloat(y);

if (parseFloat(x) === 0.0 && parseFloat(y) === 0.0) {
    console.log(`Origem`);
} else if (parseFloat(x) === 0.0) {
    console.log(`Eixo Y`);
} else if (parseFloat(y) === 0.0) {
    console.log(`Eixo X`);
} else if (x > 0.0) {
    if (y > 0.0) {
        console.log(`Q1`);
    } else {
        console.log(`Q4`);
    }
} else {
    if (y > 0.0) {
        console.log(`Q2`);
    } else {
        console.log(`Q3`);
    }
}