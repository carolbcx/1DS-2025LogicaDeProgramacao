/***************************************************** 
                Lista de Exercícios 
*****************************************************/
/*  
1. Realize as seguintes instruções: - Crie uma variável texto e armazene o nome de uma pessoa - Crie uma variável numérica e armazene o ano de nascimento - Escreva "Nome da pessoa" nasceu em "ano de nascimento" - Calcule a idade da pessoa - Escreva "Nome da pessoa" tem "idade" anos 
2. Se um retângulo possui comprimento=12cm e largura=6cm, qual a sua área?  
3. E se adicionarmos uma dimensão altura=5cm, qual seria o volume?  
4. Se temos uma equação 2x² + 3x -1, qual seria o valor de delta?  
5. Um cliente fez um compra no valor de R$ 450,00 e obteve 3% de desconto. 
Qual o valor do desconto e o valor final da compra ?  
6. Um carro viaja por três horas e meia a uma velocidade média de 95 Km/h.  
Calcule a distância percorrida, sabendo que Vmedia = S/T 
*/

var nomedapessoa = "carol";
var nascimento = 2007;
var idade = 2007 - nascimento;
console.log("nome da pessoa:", nomedapessoa, "nasceu em:", nascimento);

console.log(nomedapessoa, " tem", idade, "anos.");
console.log("---------------");

var base = 12;
var altura = 6;
var area = base * altura;
console.log(
  "A área do retângulo de base",
  base,
  " e altura",
  altura,
  "é:",
  area
);

var profundidade = 5;
var volume = area * profundidade;
console.log("o volume do retângulo é:", volume);

var a = 2;
var b = 3;
var c = -1;
var delta = b ** 2 - 4 * a * c;
console.log("o valor de delta é:", delta);

var compra = 450;
var desconto = 0.03; //var desconto = 3/100
desconto = compra * desconto;
var total = compra - desconto;
console.log("compra: R$", compra, " -desconto R$", desconto, "=total:", total);

var tempo = 3.5
var velocidade = 95
var distancia = tempo * velocidade;
console.log(" a distancia percorrida é de:", distancia, "km");

