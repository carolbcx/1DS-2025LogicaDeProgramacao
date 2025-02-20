// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");

console.log("-----------------------------------");

//javascript trabalha com sistema case sensitive (maiuscula sao diferentes de minusculas)
console.log("criando uma variavel teste e tentando acessar com testE.");
let teste = "variavel teste!";
// console.log(testE);
console.log(teste);

//REGRAS PARA NOMEAR IDENTIFICADORES(VARIAVEIS)
//Podem iniciar com 'A'-'Z', 'a'-'Z', '-' ou '$'
let Minhavariavel = 10;
let outravariavel = 2.65;
const _minhaconstante = "uma constante qualquer!";
var $minhavariavel = -5;

//variaveis logicas (boolean)
var nome = "carol";
var linda = false;
var ealuno = true;
console.log("nome:", nome, "| e aluno?", ealuno, "| e linda?", linda);

