//exercicio 10: Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
let contador=prompt("informe um numero");
while(contador != 5){
contador = prompt("numero errado, insira novamente");
  if(contador == 5){
    alert("voce digitou 5");
    break;
  }
}
