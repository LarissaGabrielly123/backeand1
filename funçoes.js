import rl from "readline-sync";

//1)Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta
let frase= rl.question ("informe um texto para ser covertido");


//declaraçao de funçao
function Maiusculas(texto){
   return texto.toUpperCase();
 
}

//expreçao de funçao
const cxAlta = function(texto){
    return texto.toUpperCase();
}
console.log(cxAlta(frase))

//funçao de seta
const tdMaiuscula =(texto) => texto.toUpperCase();
console.log(tdMaiuscula(frase));