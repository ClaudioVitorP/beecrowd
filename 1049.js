const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let grupoAnimal = (lines.shift() === "vertebrado");
let coluna2 = lines.shift();
let coluna3 = lines.shift();

const linha1 = coluna2 === "ave" && coluna3 === "carnivoro";
const linha2 = coluna2 === "ave" && coluna3 === "onivoro";
const linha3 = coluna2 === "mamifero" && coluna3 === "onivoro";
const linha4 = coluna2 === "mamifero" && coluna3 === "herbivoro";
const linha5 = coluna2 === "inseto" && coluna3 === "hematofago";
const linha6 = coluna2 === "inseto" && coluna3 === "herbivoro";
const linha7 = coluna2 === "anelideo" && coluna3 === "hematofago";
const linha8 = coluna2 === "anelideo" && coluna3 === "onivoro";

if (grupoAnimal) {
    if (linha1) console.log("aguia");
    if (linha2) console.log("pomba");
    if (linha3) console.log("homem");
    if (linha4) console.log("vaca");
} else {
    if (linha5) console.log("pulga");
    if (linha6) console.log("lagarta");
    if (linha7) console.log("sanguessuga");
    if (linha8) console.log("minhoca");
}