/***********************************************
      lista de exercios 06
************************************************/
/*
Criar uma função que recebe o nome e a idade de uma pessoa e retorne uma mensagem informada se ela pode votar no brasil.

regras para votação no brasil:
menores de 16 anos : não podem votar.
entre 16 e 17 anos ou acima de 70 anos : O voto é facuntativo.
entre 18 e 70 anos : o voto é obrigatório.
*/
var idade = 16 
var votaçao = idade >= 16 ? " nao pode votar! pois é menor de 18 anos" : "pode votar";
console.log("Hyllari que tem idade:", idade, "-", votaçao);

var idade = 17
var votaçao = idade >= 17 ? " pode votar! mas o voto é facultativo" : " nao pode votar";
console.log(" Carol que tem idade:", idade, "-", votaçao);

var idade = 18
var votaçao = idade >= 18? " pode votar! é obrigatorio votar" : " nao pode votar";
console.log(" Leo que tem idade:", idade, "-", votaçao);

console.log("----------------------------------------------")
const podeVotar = (idade) => {
    if (idade < 16){
        return "nao pode votar";
    }else if(idade >=18 && idade < 70){
        return "pode votar"
    }else{
        return "voto facultativo";
    }
}
var nome =["hyllari","carol","leo","natali"];
console.log("ola", nome[0], "voce tem 16 anos e ", podeVotar(16));
console.log("ola", nome[1], "voce tem 22 anos e ", podeVotar(22));
console.log("ola", nome[2], "voce tem 70 anos e ", podeVotar(70));
console.log("ola", nome[3], "voce tem 12 anos e ", podeVotar(12));
console.log("ola", nome[4], "voce tem 67 anos e ", podeVotar(67));