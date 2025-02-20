/******************************************
             Lista de exercicio
*******************************************/
// 1. Crie um array de frutas com os seguintes elementos:
// Banana,Maça,pera,Uva, Morango.
// 2.adicione tengerina no final.
// 3.adicione tangerina no final.
// 4.exiba conteudo do indico 5.
// 5. exclua o elemento uva.
// 6. crie uma cópia do array apenas como elementos com indicais 2,3 e 4

var frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];
console.table(frutas);

frutas.push("tangerina");
console.table(frutas);
frutas.unshift("goiaba");
console.table(frutas);

console.log(frutas[5]);

var elementoexcluir = "Uva";
var posicao = frutas.indexOf(elementoexcluir);
frutas.splice(posicao, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);

//criando um array numérico
var numeros = [4, 3, 1, 9, 7, 2];
console.table(numeros);

// imprimindo os elementos das posições ímpares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

//verificando se o array contém um item
console.log("contem 9", numeros.includes(9));
var contem0 = numeros.includes(9);
console.log("contém 0:", contem0);

//ordenando os elementos de vetor
numeros.sort();
console.table(numeros);

//invertendo a ordem ou posição dos itens
numeros.reverse();
console.table(numeros);

//alterando o valor de um elemento com base em sua posição
numeros[2] = 5;
console.table(numeros);

numeros[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

//criando arrays hibridos
var hibrido = [10, "pafuncio", 3.45, "zuleika", 7];
console.table(hibrido);

hibrido[0] = "tiburcio";
console.table(hibrido);

//criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [1, 3, 9],
];

console.table(matriz);

//obtendo elemento com base em seus indices
console.log("matriz[1,2] =", matriz[1][2]);
console.log("matriz[2,0] =", matriz[2][0]);

//alterando valores de elementos com base em seus indices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);
