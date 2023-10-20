const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [horaInicial, horaFinal] = lines.shift().split(" ");

horaInicial = parseInt(horaInicial);
horaFinal = parseInt(horaFinal);

let duracao = 0 ;

if (horaInicial === horaFinal) {
    duracao = 24
} else if (horaInicial > horaFinal) {
    duracao = 24 - horaInicial + horaFinal;
} else {
    duracao = horaFinal - horaInicial;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);

