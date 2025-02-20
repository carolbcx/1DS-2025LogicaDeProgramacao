/********************************************************************
              Lista de Exercicios 05
*********************************************************************/
//1. Crie uma função que receba como parametro o ano de nascimento de uma pessoa a retorne sua idade
//2. Cria uma função que receba a quantidade de combustivel de um carro e retorne quantos Kms ele pode viajar com esse combustivel.Considereque o veiculo faz uma media de 1 Kms/L

function nascimento(nome, ano) {
  let idade = 2025 - ano;
  console.log("A/O", nome, "nasceu no ano", ano, "e tem", idade, "anos");
}
nascimento("carol", "2007");

console.log("------------------------------------------------------");

const combustivel = (litros) => {
  return litros * 12;
};
var car1 = 20;
var car2 = 8;
var car3 = 2;
console.log("carro 1: ", car1, "->", combustivel(car1), "Kms.");
console.log("carro 1: ", car2, "->", combustivel(car2), "Kms.");
console.log("carro 1: ", car3, "->", combustivel(car3), "Kms.");
