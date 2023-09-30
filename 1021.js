const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let valor = lines.shift(); 

console.log("NOTAS:")

nota = 100
qtdeNotas = parseInt(valor / nota);
resto = valor % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 50
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 20
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 10
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 5
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 2
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

console.log("MOEDAS:")
moeda = 1
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 1.00")

//para contornar o problema dos números fracionarios
//estou multiplicando por 100 e arredondando
resto = parseInt(resto * 100)

//0.50 centavos
moeda = 50
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda )

//25 centavos
moeda = 25
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda )

//10 centavos
moeda = 10
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda )

//5 centavos
moeda = 5
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0.0" + moeda )

//1 centavos
moeda = 1
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0.0" + moeda )