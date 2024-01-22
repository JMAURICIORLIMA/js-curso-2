// Desafio 2
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

// Desafio 3
function verificarChute() {
    console.log("O botão foi clicado");   
}

// Desafio 4
function exibirAlerta() {
    alert("Eu amo Js");
}

// Desafio 5
function informarCidade() {
    let nomeDaCidade = prompt("Me informe o nome de uma cidade do Brasil");
    alert(`Estive em ${nomeDaCidade} e lembrei de você`);    
}

// Desafio 6
function somarNumeros() {
    let numero1 = prompt("Informe o primeiro número:");
    let numero2 = prompt("Informe o segundo número:");

    if(!isNaN(numero1) && !isNaN(numero2)) {
        let resultado = Number(numero1) + Number(numero2);
        alert(`A soma é ${resultado}`);
    } else {
        alert(`Por favor, informe números válidos`);
    }
}