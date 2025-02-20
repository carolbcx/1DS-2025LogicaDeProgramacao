// criando variaveis do tio array (VETOR)
var numeros =[1, 2, 3, 4, 5,];
console.log(numeros); //imprimindo os dados do array
console.table(numeros); //imprimindo os dados em forma de tabela
console.log(numeros[1]); //imprimindo o item de indice 1
console.log("o vetor tem:", numeros.length, "elementos.");

var dinos = ["tiranossauro Rex", "estegossauro", "anquilossauro", "titanossauro",];

console.log(dinos) // imprimindo os dinos
console.table(dinos); //imprimindo os dados em forma de tabela
console.log("o vetor dinos tem:", dinos.length, "elementos.");

// adicionando elementos a um vetor existente
dinos.push("brontossauro");
console.table(dinos);
console.log("o vetor dinos tem:", dinos.length, "elementos.");

dinos.unshift("triceratops"); //adiciona um elemento no inicio do vetor
console.table(dinos);
console.log("o vetor dinos tem:", dinos.length, "elementos.");

//obtendo um elemento com base em seu indice (posição)
console.log("1ª posição:", dinos [0]);
console.log("3ª posição:", dinos [2]);
console.log("20ª posição:", dinos [19]); // quando nao temos o item, aprenta um erro (undefiend)

//alterando elementos com base em seu indice (posição)
dinos [3] = "velociraptor";
console.table(dinos);

//removendo elementos do vetor
var dinos = ["triceratops", "tiranossauro rex","estegossauro","anquilissauro","brontolossauro",];
console.table(dinos);

dinos.pop(); //remove o ultimo elemento do array (vetor)
console.table(dinos);

dinos.shift(); //remove o primeiro elemento do array (vetor)
console.table(dinos);

dinos.slice(1, 1); //remove o elemento de indice 1 (a partir da posição 1, exclui 1 elemento)
console.table(dinos); 

// procurandoa o indice (posição) de elementos
var dinos = ["tricerátropos", "trienossauro rex", "estegossauro", "anquilossauro", "brotonossauro", "ictiossauro", "pterodático", "espinossauro"];

console.table(dinos);

var elementoprocurado = "pterodático";
var posição = dinos.indexOf(elementoprocurado);
console.log(elementoprocurado, "está no indice:", posição);

elementoProcurado = "estegossauro";
var posição = dinos.indexOf(elementoprocurado);
console.log(elementoprocurado, "está no indice:", posição);

elementoProcurado = "castellossauro";
var posição = dinos.indexOf(elementoprocurado);
console.log(elementoprocurado, "está no indice:", posição);
console.log("indexOf = -1 significa que o elemento não foi encontrado no vetor!")

var elementoExcluir = "pterodactilo";
var posicao = dinos.indexOf(elementoExcluir);
dinos.splice(posicao, 1);
console.table(dinos);

var copia = dinos.slice();
console.log("copiando um vetor!");
console.table(copia);



