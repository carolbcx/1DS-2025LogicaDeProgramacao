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

frutas.push ("tangerina");
console.table(frutas);
frutas.unshift ("goiaba");
console.table(frutas);

console.log(frutas[5]);

var elementoexcluir = "Uva";
var posicao  = frutas.indexOf(elementoexcluir);
frutas.splice(posicao, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);

