const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let diaInicial = parseInt(lines[0].split(' ')[1]);
let [horaInicial, minutoInicial, segundoInicial] = lines[1].split(' : ').map((elem) => parseInt(elem));
let diaFinal = parseInt(lines[2].split(' ')[1]);
let [horaFinal, minutoF, segundoF] = lines[3].split(' : ').map((elem) => parseInt(elem));

let totalSegundosInicial = diaInicial * 24 * 60 * 60 + horaInicial * 60 * 60 + minutoInicial * 60 + segundoInicial;
let totalSegundosFinal = diaFinal * 24 * 60 * 60 + horaFinal * 60 * 60 + minutoF * 60 + segundoF;
let diferencaSegundos = totalSegundosFinal - totalSegundosInicial;

let dias = Math.floor(diferencaSegundos / (24 * 60 * 60));
diferencaSegundos %= 24 * 60 * 60;

let horas = Math.floor(diferencaSegundos / (60 * 60));
diferencaSegundos %= 60 * 60;

let minutos = Math.floor(diferencaSegundos / 60);
let segundos = diferencaSegundos % 60;

console.log(`${dias} dia(s)\n${horas} hora(s)\n${minutos} minuto(s)\n${segundos} segundo(s)`);