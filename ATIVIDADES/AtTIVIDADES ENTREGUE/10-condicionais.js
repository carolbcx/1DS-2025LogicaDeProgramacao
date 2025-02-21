// Condicional simples com IF
var anoNascimento = 2003;
if (anoNascimento > 2003) {
  console.log("a pessoa nasceu depois de2003");
}

if (anoNascimento < 2003) {
  console.log("a pessoa nasceu depois de 2003.");
}

if (anoNascimento < 2003) {
  console.log("a pessoa nasceu antes de 2003.");
}

if (anoNascimento == 2003) {
  console.log("a pessoa nasceu em 2003.");
}

// Condições simples com If- Else
var anoNascimento = 2005;
if (anoNascimento > 2000) {
  console.log(" A pessoa nasceu depois de 2000.");
} else {
  console.log("A pessoa nsaceu em 2000 ou antes");
}

//Condições compostas com IF
const login = "admin";
const senha = "12345";

var loginUser = "admin";
var senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log("acesso permitido");
} else {
  console.log("acesso negado");
}

//Desvio condicional aninhado - IF-ELSE-IF-ELSE
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("siga");
} else if (semaforo == "amarelo") {
  console.log("atençao");
} else {
  console.log("pare!");
}

// Desvio condicional IF com bloco de comandos
var idade = 18;

if (idade <= 18) {
  console.log("entrei no if...");
  idade++;
  console.log("incrementi a idade...");
  console.log("a nova idade é", idade);
  console.log("agora estou saindo do bloco if");
}
console.log("terminei");

//Criando variaveis locais com "let"(so existe dentro do cloco onde foram criadas)
var mes = "agosto";
var dia = 15;

if( dia == 15 && mes == "agosto"){
  let mensagem = "hoje é dia 15 de agosto";
  console.log(mensagem)
}
console.log("tentando acessar a variavel local fora do bloco, vai dar erro");
//console.log(mensagem);

//criando uma função com desvio condicional IF
const desconto = (valorCompra) =>{
  let desconto = 0;
  if (valorCompra >= 1000){
    desconto = (valorCompra * 12) / 100;
  }

  return desconto;
}

var totalCompra = 950;
console.log("valor total da compra: R$", totalCompra, "::: Desconto: R$", desconto(totalCompra));
totalCompra = 1800;
console.log("valor total da compra: R$", totalCompra, "::: Desconto: R$", desconto(totalCompra));

//Desvio condicional IF inline (ternario)
// condição ? expressao se verdadeiro : expressao se falso
var preco = 500;
var resultado = preco <= 100 ? "ta barato" : "vish, ta caro";
// o operador acima é o mesmo que escrever:
// if(preco <=100){
// resultado = "ta barato"
// }else{
//resultado = "vish, ta muito caro"
//}
console.log("preco: R$", preco, "-", resultado);

//if ternario com somente uma expressao
//condiçao && expressao
var logado = true;
logado && console.log("usoario esta logado");



//Desvio condicional - switch case
console.log("----------Switch Case----------")
switch (1) {
  case 1:
    console.log("o usuario digitou o numero 1!");
    break;

  default:
    console.log("o usuario informou um numero diferente de 1!");
    break;
};
console.log("--------------------------------")
//Menu de seleção
var menuSelecionado = "Home"
switch (menuSelecionado) {
  case "Home":
    console.log("voce clicou no link 'home'");
    break;

    case "quem somos":
    console.log("voce clicou no link 'que somos'");
    break;

  default:
    console.log("opçao invalida de meu");
    break;
}


//Varias opções com mesmo case - switch case
var mes = 11;

switch (mes) {
  case 1:
    case 2:
      case 3:
    console.log("primeiro trimestre!");
    break;

    case 4:
      case 5:
        case 6:
          console.log("segundo trimestre!");
          break;

          case 7:
            case 8:
              case 9:
                console.log("terceiro trimestre!");
                break;

                case 10:
                  case 11:
                    case 12:
                      console.log("quarto trimestre!");
                      break;
};






