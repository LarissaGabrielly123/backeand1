//node tarefa1.js
//01 Escreva um programa que declare duas variáveis, “nome” e “idade”, e asimprima em um console em uma frase que diga “Olá, meu nome é [nome]e eu tenho [idade] anos”.
let nome= "larissa";
let idade=15;
console.log(`olá meu nome é ${nome}, tenho ${idade} anos`); 

//02. Declare uma string e utilize métodos para converter para maiúsculas eminúsculas.
console.log(nome.toUpperCase()); 
console.log(nome.toLowerCase());

//03Declare uma variável e verifique se o tipo dela é number.
console.log(typeof idade);

//04 Calcule o Índice de Massa Corporal (IMC) utilizando variáveis para altura e peso
let altura= 1.80;
let pesso= 68;
let imc= (pesso / (altura* altura).toFixed(2))
console.log("seu imc e:"+ imc);
