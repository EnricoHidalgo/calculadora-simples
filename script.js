let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let operador = document.getElementById('op');
let resultSec = document.getElementById('result');

function calc(){

    let valor1 = Number(num1.value);
    let valor2 = Number(num2.value);

    if(isNaN(valor1) || isNaN(valor2)){
        alert("Por favor, insira um valor válido.");
    }

    let resultado;
    switch(operador.value) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
        default:
            resultado = "Operador inválido.";
    }
    resultSec.innerText = "= " + resultado;

}