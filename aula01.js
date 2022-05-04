/*1 - Faça um algoritmo que leia o nome e a idade de uma pessoa e ao final escreva o nome da pessoa,
sua idade e se ela é maior de idade ou não.*/

var nome = "Alan"; //usei var aqui pois havia um erro relacionado a escopo por conta dos 3 execícios no mesmo arquivo.
let idade = 34;

if(idade >= 18){
    console.log (nome + " tem " + idade + " anos, e é maior de idade.")
} else {
    console.log (nome + " tem " + idade +  " anos, e não é maior de idade.")
};



/*2 - Faça um algoritmo que leia o nome e o salário de um funcionário. O funcionário terá um aumento de 18%,
caso seu novo salário seja acima de R$3.000,00, ele deverá declarar imposto. Ao fim do algoritmo diga ao usuário seu nome,
seu novo salário e se ele deverá ou não declarar imposto.*/

let nome = "Alan";
let salario = 3000;
let novoSalario = salario + 18*3000/100;

if (novoSalario > 3000) {
    console.log(nome + " seu novo salário é " + novoSalario + " você deve declarar o imposto de renda.")
}else {
    console.log(nome + " seu novo salário é " + novoSalario + " você não deve declarar o imposto de renda.")
};



/*3 - Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva 
o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual ou 
superior a 8.*/


let nome = "Alan";
let nota1 = 9;
let nota2 = 7;
let nota3 = 8;

const mediaDasNotas = ((nota1 + nota2 + nota3)/3).toFixed(1);

if (mediaDasNotas >= 8) {
    console.log(nome + " sua média foi " + mediaDasNotas + ", você foi aprovado!")
}else {
    console.log(nome+ " sua média foi " + mediaDasNotas + ", você foi reprovado.")
};