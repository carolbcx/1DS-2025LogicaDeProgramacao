/***************************************************** 
                Exercícios para fixação 
*****************************************************/ 
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/

let nome = "lolou"; 
let banco = "chat";
let agencia = 100; 
let conta = "15874-9";
let saldo = 75;
console.log("*********",banco,"**********");
console.log("cliente:",nome);
console.log("agencia:",agencia, "| conta:",conta);
console.log("seu saldo é de R$", saldo);

console.log("  + deposito: R$10,00");
saldo=saldo+10;
console.log("  + deposito: R$9,00");
saldo=saldo+9;
console.log("  - saque: R$8,00");
saldo=saldo-8;
console.log("  - saque: R$7,00");
saldo=saldo-7;
console.log("  + deposito: R$5,00");
saldo=saldo+5;

console.log("*********",banco,"**********");
console.log("cliente:",nome);
console.log("agencia:",agencia, "| conta:",conta);
console.log("seu saldo é de R$", saldo);

saldo+= 50; //mesma coisa que > saldo = saldo + 50;





