//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require('path');

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO ABAIXO///////////////////
//let [a, b] = valores.shift().split(" ");

let qtdeLinhas = lines.shift(); //obtem a quantidade de linhas que serao lidas para o problema
let soma;

//para cada linha do arquivo
for (let numeroLinha = 0; numeroLinha < qtdeLinhas; numeroLinha++) {
    let linha = lines.shift();

    //executa a funcao para precessar o conteúdo da linha
    soma = processarLinha(linha);
    console.log(soma);
}

function processarLinha(texto){
    let textoNumero = "";
    let caractere;

    let numero1 = 0, numero2 = 0, numero3 = 0    //variavel usada para armazenar os valores lidos
    let numero1Preenchido = false, numero2Preenchido = false, numero3Preenchido = false; //flags para identificar que os números já foram identificados
    
    //para cada catactere na linha 
    for(let indice = 0; indice < texto.length; indice++) {
        //pega o caractere com o uso do charAt 
        caractere = texto.charAt(indice); 
        
        if (!numero1Preenchido) { //caso o numero1 ainda nao tenha sido identificado
            if (ehNumero(caractere)){
                 //se o caractere é um numero 
                textoNumero += caractere; //concatena o caractere numerico obtido 
            } else if (textoNumero != ""){  
                //se o caractere nao for um numero e a variavel textoNumero for diferente de vazio 
                //é porque ja foi identicado o numero por completo e chegou a hora de armazenar o numero concatenado
                numero1 = Number(textoNumero)
                textoNumero = "";
                numero1Preenchido = true; //maraca como true que a variavel numero1 já esta preechida para que o proximo numero seja armazenado em outra variavel
            }
        } else if (!numero2Preenchido) {
            if (ehNumero(caractere)){
                textoNumero += caractere;
            } else if (textoNumero != ""){
                numero2 = Number(textoNumero);
                textoNumero = "";
                numero2Preenchido = true;
            }
        } else if (!numero3Preenchido) {
            if (ehNumero(caractere)){
                textoNumero += caractere;
            } else if (textoNumero != ""){
                numero3 = Number(textoNumero);
                textoNumero = "";
                numero3Preenchido = true;
            }
        }
    }

    //resolve a situacao do texto terminar com o terceiro numero.
    //sem este bloco o caso "a23ab54k33" faria com que o numero3 
    //ficasse com o valor 0 ao inves de 33, pois o criterio adotado 
    //dentro do laço é esperar um caractere nao numerico para encerrar 
    //a leitura do numero.
    if (textoNumero != "") {
        numero3 = Number(textoNumero);
    }

    return (numero1 + numero2 + numero3);
}


function ehNumero(caractere) {
    let codCaractere = caractere.charCodeAt() //descobre o codigo ascii de um caractere
    //verifica se o codigo do caractere esta entre os codigos dos numeros 0 e 9
    if (codCaractere >= 48 && codCaractere <= 57){ 
        return true
    } 
    return false
}

// //Versão 02: Esta versão ao indentificar o termino da leitura do valor já faz a acumulação do valor na variável soma reduzindo assim a necessidade de trabalhar com 3 variaveis de número e mais 3 variáveis de flags
// //importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
// const fileSystem = require('fs')

// //importo o modulo path para trabalhar com o endereço de arquivos e diretorios
// const endereco = require('path');

// //descubro o endereço de onde meu script js esta salvo
// //ex: c:\documentos\javascript
// const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

// //realiza a leitura das linhas no arquivo dev\stdin que foi criado
// const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

// //define qual é a quebra de linha utilizada no seu sistema operacional
// //se você estiver utilizando linux coloque \n se for windows coloque \r\n
// const quebraLinhaWindows = '\r\n'

// let lines = conteudoArquivo.split(quebraLinhaWindows);

// ///////////////////////COLAR NO BEECROWD O CODIGO ABAIXO///////////////////
// //let [a, b] = valores.shift().split(" ");

// let qtdeLinhas = lines.shift(); //obtem a quantidade de linhas que serao lidas para o problema
// let soma;

// //para cada linha do arquivo
// for (let numeroLinha = 0; numeroLinha < qtdeLinhas; numeroLinha++) {
//     let linha = lines.shift();

//     //executa a funcao para precessar o conteúdo da linha
//     soma = processarLinha(linha);
//     console.log(soma);
// }

// function processarLinha(texto){
//     let textoNumero = "";
//     let caractere;

//     let soma = 0

//     //para cada catactere na linha 
//     for(let indice = 0; indice < texto.length; indice++) {
//         //pega o caractere com o uso do charAt 
//         caractere = texto.charAt(indice);         
    
//         if (ehNumero(caractere)){
//             //se o caractere é um numero 
//             textoNumero += caractere; //concatena o caractere numerico obtido 
//         } else if (textoNumero != ""){  
//             //se o caractere nao for um numero e a variavel textoNumero for diferente de vazio 
//             //é porque ja foi identicado o numero por completo e chegou a hora de armazenar o numero concatenado
//             soma += Number(textoNumero)
//             textoNumero = "";
//         }
//     }

//     //resolve a situacao do texto terminar com o terceiro numero.
//     //sem este bloco o caso "a23ab54k33" faria com que o numero3 
//     //ficasse com o valor 0 ao inves de 33, pois o criterio adotado 
//     //dentro do laço é esperar um caractere nao numerico para encerrar 
//     //a leitura do numero.
//     if (textoNumero != "") {
//         soma += Number(textoNumero);
//     }
//     return soma;
// }

// function ehNumero(caractere) {
//     let codCaractere = caractere.charCodeAt() //descobre o codigo ascii de um caractere
//     //verifica se o codigo do caractere esta entre os codigos dos numeros 0 e 9
//     if (codCaractere >= 48 && codCaractere <= 57){ 
//         return true
//     } 
//     return false
// }