//exercicio 13:  Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.
function calculoAreaCirculo(raio){
    let area = parseFloat(3.14 *(raio * raio));
    alert(`valor da area = ${area}`);
  }
  let num = parseFloat(prompt("informe um numero"));
  calculoAreaCirculo(num);