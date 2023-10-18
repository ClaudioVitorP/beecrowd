const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [a, b, c] = lines.shift().split(" ");
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

const pi = 3.14159;

let triangulo = (a * c) / 2;
let circulo = pi * Math.pow(c, 2);
let trapezio = (( a + b ) * c )/2;
let quadrado = b * b;
let retangulo = a * b;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));