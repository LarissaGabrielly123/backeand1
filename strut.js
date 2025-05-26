import rl from 'readline-sync'
//1 )Escreva um programa que peça ao usuário para digitar um número e, em seguida, imprima a tabuada desse número usando um loop while.
let num= rl.questionInt('digite um numero');
let cont =1;
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num*cont}`);
    cont++
}



//2) Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de alunos.
let numAlun= rl.questionInt("informe o numero de alunos;");
let somaMedias=0;
let contAlun=1;
while (contAlun <= numAlun) {
    console.log(`aluno ${contAlun}:`);
    let somaNota=0;
    let contBim=1;

    while (contBim <=4 ) {
        let nota= rl.questionInt (`informe a nota do ${contBim} bimestre  para o aluno ${contAlun}`);
        somaNota= somaNota+nota;
        contBim++;

    }

    let medAlun=  somaNota /4;
    somaMedias += medAlun;

    console.log(`media do aluno ${contAlun}: ${medAlun}: ${medAlun.toFixed(2)}`);
    contAlun++;

}

let medGeralTurma= somaMedias / numAlun;
console.log(`media geral da turma: ${medGeralTurma.toFixed(2)}`);

//3) a) Escreva um programa que simule um jogo de adivinhação onde o usuário deve adivinhar um número aleatório entre 1 e 100. O programa deve fornecer dicas sobre se o número digitado é
//maior ou menor que o número aleatório. O jogo deve continuar até que o usuário adivinhe corretamente.

const numaleatorio= Math.floor(Math.random()*100)+1;

let tentativa;

do {
    tentativa = rl.questionInt("tente adivinhar o numero entre (1 e 100):");
    if(tentativa === numaleatorio){
        console.log("parabens vc acertou!!");
    } else if (tentativa = numaleatorio){
        console.log("tente um numero maior");
    } else{
        console.log("tente novamente");
    }
} while (tentativa !== numaleatorio);


//2.Escreva um programa que itere sobre os elementos de um array e imprima seus valores
for (let i = 1; i <=10; i++) {
    let nome =rl.question (`informe o nome da ${i} pessoa`);
    let salario = rl.questionFloat (` informe 0 salario de ${nome}:`);

    let ir =0; 
    if (salario <=2100){
        ir=0;
    } else if (salario <=2800){
        ir =salario* 0.075;
    }else if (salario <=3750){
        ir =salario* 0.15;
    }else if (salario <=4660){
        ir =salario* 0.225;
    } else{
        ir =salario*0.275
    }

    console.log(`\n --- imosto de renda devido ---`)
    console.log(`nome: ${nome} \nimposto de renda: R$ ${ ir.toFixed(2)}\n `)
 }

//For in 
 const pessoa ={
    nome:"carnlos",
    dtnasc:"22/2/2890",
    cpf: 882345395639,
    sexo:'M'
 }


for (const key in pessoa) {
   console.log(`${key}: ${pessoa [key]}`);
    
}

const cores= ["branco", "preto", "azul", "roxo", "verde", "amarelo"]
for (const elemento of cores){
    console.log(elemento);
    valores += elemento + ",";
}
console.log(valores)