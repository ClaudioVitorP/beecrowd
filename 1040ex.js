const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [ nota1, nota2, nota3, nota4 ] = lines.shift().split(" ");
let notaExame = lines.shift();

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
nota4 = parseFloat(nota4);

notaExame = parseFloat(notaExame);

const pesoN1 = 2;
const pesoN2 = 3;
const pesoN3 = 4;
const pesoN4 = 1;

const media = (nota1 * pesoN1 + nota2 * pesoN2 + nota3 * pesoN3 + nota4 * pesoN4) / (pesoN1 + pesoN2 + pesoN3 + pesoN4);

console.log("Media: "+ media.toFixed(1))

if (media >= 7.0){
    console.log("Aluno aprovado.");
}else if (media < 5 ){
    console.log("Aluno reprovado.");
}else if (media >= 5.0 && media <= 6.9 ){
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + notaExame.toFixed(1));
    let recalculo =(media + notaExame) / 2
        if(recalculo => 5.0){
            console.log("Aluno aprovado.");
            console.log("Media final: "+ recalculo.toFixed(1))
        } else{
            console.log("Aluno reprovado.");
        }
}