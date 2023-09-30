const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//->
let [ codigo, quantidade ] = lines.shift().split(" ");

codigo = parseInt(codigo)
quantidade = parseInt(quantidade);

let preco;
    switch (codigo) {
      case 1:
        preco = 4.00;
        break;
      case 2:
        preco = 4.50;
        break;
      case 3:
        preco = 5.00;
        break;
      case 4:
        preco = 2.00;
        break;
      case 5:
        preco = 1.50;
        break;
      default:
    }

const total = (preco * quantidade);

console.log("Total: R$ " + total.toFixed(2));