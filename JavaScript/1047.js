const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines.shift().split(" ");

horaInicial = parseInt(horaInicial);
minutoInicial = parseInt(minutoInicial);
horaFinal = parseInt(horaFinal);
minutoFinal = parseInt(minutoFinal);

let duracao = 0;
let horaEMinutoInicial = horaInicial * 60 + minutoInicial;
let horaEMinutoFinal = horaFinal * 60 + minutoFinal;

if (horaEMinutoInicial === horaEMinutoFinal) {
    duracao = 24 * 60;
} else if (horaEMinutoInicial > horaEMinutoFinal) {
    duracao = 24 * 60 - horaEMinutoInicial + horaEMinutoFinal;
} else {
    duracao = horaEMinutoFinal - horaEMinutoInicial;
}

const horas = Math.floor(duracao / 60);
const minutos = duracao % 60;

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
