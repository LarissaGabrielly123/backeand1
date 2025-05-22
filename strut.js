//1 )Escreva um programa que peça ao usuário para digitar um número e, em seguida, imprima a tabuada desse número usando um loop while.
import rl from 'readline-sync'
let num= rl.questionInt('digite um numero');
let cont =1;
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num*cont}`);
    cont++
}



//2) Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de alunos.