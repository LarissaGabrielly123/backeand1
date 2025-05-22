//1)Solicite ao usuário para inserir um número representando um dia da semana (1 a 7) e mostre o nome do dia correspondente.
import rl from 'readline-sync';

let dia = rl.questionInt(" informe um valor de 1 a 7:");

switch (dia) {
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda");
        break;
   case 3:
     console.log("terça");
       break;
   case 4:
      console.log("quarta");
       break;
   case 5:
      console.log("quinta");
        break;
   case 6:
       console.log("sexta");
        break;
   case 7:
       console.log("sabado");
        break;

    default:
        console.log("invalido");
        break;
}


//2)Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome do mês.
let mes= rl.questionInt("informe o mes de 1 a 12;");
switch (dia) {
    case 1:
        console.log("janeiro")
        break;
    case 2:
        console.log("fevereiro")
        break;
   case 3:
     console.log("março")
       break;
   case 4:
      console.log("abril")
       break;
   case 5:
      console.log("maio")
        break;
   case 6:
       console.log("junho")
        break;
   case 7:
       console.log("julho")
        break;
  case 8:
      console.log("agosto")
        break;
  case 9:
     console.log("setembro")
        break;
   case 10:
     console.log("outubro")
       break;
 case 11:
      console.log("novenbro")
     break;
  case 12:
     console.log("desembro")
     break;

    default:
        console.log("invalido")
        break;
}

//3)Implementar um programa que simule uma calculadora. O usuário deverá informar dois valores e a operação desejada. Com auxílio de um switch deve ser computado e mostrado o resultado dao peração.
let x =rl.questionFloat("informe o primeiro valor;");
let y =rl.questionFloat("informe o segundo valor;")
let op =rl.question("escolha uma oposao: \n[1] soma \n[2] subitraçoa \n[3] multplicaçao \n[4] divisao");
switch (op) {
    case 1:
        console.log(`${x} + ${y}= ${x+y}`);
        break;

    case 2:
       console.log(`${x} - ${y}= ${x-y}`);
        break;

    case 3:
        console.log(`${x} * ${y}= ${x*y}`);
        break;

   case 4:
      console.log(`${x} / ${y}= ${x/y}`);
       break;

    default:
        console.log("opçao invalida");
        break;
}

//4)Um funcionário irá receber um aumento de acordo com o seu categoria de bonificação (A,B,C e D). A tabela abaixo mostra o percentual de aumento de cada categoria:
let salario= rl.questionFloat("informe seu salario:");
let cat= rl.question("informe a categoria de bonificaçao").toUpperCase();
let bonus=0

switch (cat) {
    case 'A':
        bonus= salario * 0.05;
        console.log(`novo salario: ${(salario+bonus).toLocaleString('pt-br',{styli: 'currency', currency: 'BRL'})}.`);
        break;
   case 'B':
     bonus= salario * 0.10;
     console.log(`novo salario: ${(salario+bonus).toLocaleString('pt-br',{styli: 'currency', currency: 'BRL'})}.`);
        break;
    case 'C':
       bonus= salario * 0.15;
        console.log(`novo salario: ${(salario+bonus).toLocaleString('pt-br',{styli: 'currency', currency: 'BRL'})}.`);
      break;
    case 'D':
          bonus= salario * 0.20;
           console.log(`novo salario: ${(salario+bonus).toLocaleString('pt-br',{styli: 'currency', currency: 'BRL'})}.`);
         break;
    default:
        console.log("vc nao existi!!!!")
        break;
}