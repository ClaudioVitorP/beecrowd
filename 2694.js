const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

// ->

let qtdeLinhas = lines.shift(); 
let soma;

for (let numeroLinha = 0; numeroLinha < qtdeLinhas; numeroLinha++) {
    let linha = lines.shift();

    soma = processarLinha(linha);
    console.log(soma);
}

function processarLinha(texto){
    let textoNumero = "";
    let caractere;

    let soma = 0
 
    for(let indice = 0; indice < texto.length; indice++) {
        caractere = texto.charAt(indice);         
    
        if (ehNumero(caractere)){
            textoNumero += caractere; 
        } else if (textoNumero != ""){  
            soma += Number(textoNumero)
            textoNumero = "";
        }
    }

    if (textoNumero != "") {
        soma += Number(textoNumero);
    }
    return soma;
}

function ehNumero(caractere) {
    let codCaractere = caractere.charCodeAt() 
    if (codCaractere >= 48 && codCaractere <= 57){ 
        return true
    } 
    return false
}