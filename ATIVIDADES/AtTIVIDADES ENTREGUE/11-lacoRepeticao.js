//Laço de repetição - FOR

// O professor te colocou de castigo e pediu para você escrever mil vezes a frase "eu vou prestar atenção as aulas."

for (let i = 0; i < 1000; i++) {
  console.log("eu vou prestar atenção as aulas.");
}

//Escreva todos os numeros de 1 a 20 com loop for
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//mostre no console do sistema os numeros pares entre 1 e 20
for (let i = 1; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}

//dado um vetor, calcule e exiba o somatório de seua elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("soma dos elementos:", soma);

//Dados um vetor, calcule e exiba a quantidade de pares e impares
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var pares = 0;
var impares = 0;

for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("total de pares:", pares);
console.log("total de impares:", impares);

//Dado um vetor, multiplique todos os seus elementos por 3 com o laço FOR
console.log("-------------------------------");

var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
console.log("Original:", numeros);
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}
console.log("Multiplicado por 3:", numeros);
console.table(numeros);

//dada uma matriz 2x3, mostre ao usuário todos os seus elementos com as respectivas posições
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) 
    {
      // console.log("matriz[", linha, "][", coluna, "] =", matriz[linha][coluna]);
  console.log("matriz[", linha, "][", coluna, "] =", matriz[linha][coluna]);
  console.log(`[${linha}][${coluna}] = ${matriz[linha][coluna]}`);   
  }
}
console.log("matriz[linha 0 coluna 0]=", matriz[0][0]);

//---------------- Laço Repetição - while / do while ----------------
//while testa a condição antes de entrar no laço de repetição.
//se a condição for inicialmente falsa, o laço não é executado nenhuma vez.
var t = 10

while (t >= 10) {
  console.log("entrei no laço while...");
  t = 0;
}
console.log("terminei");

//exemplo de while com escrita de 100 linhas
var i =0
while(i<=100){
  console.log(`escrita de linha ${i}`);
  i++;
}

//Laço repetição while
//while (condição) {
//fragmentos e códigos
//fragmentos e códigos
//fragmentos e códigos
//fragmentos e códigos
// contador++ | nesta parte o contador é a variavel de controle de acesso 
//}
//exemplo que funciona somente no navegador 
/*var senhaCorreta = "1234";
var tentativa = "";

while (tentativa !== senhaCorreta) {
  tentativa = prompt ("digite a senha:");
}
console.log("acesso concedido");
*/

// do while testa a condição somente no final do laço de repetição
// sendo assim, qualquer que seja a condição, o laço é executado pelo menos uma vez.

var x = 10;

do {
  console.log("entrei no laço do-while...");
  x = 0;
} while (x > 10);

console.log("terminei");'"'

