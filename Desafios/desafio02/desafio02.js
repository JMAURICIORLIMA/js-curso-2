// Desafio - 1
function olaMundo() {
    console.log("Olá, mundo!");
}

olaMundo();


// Desafio - 2
function recebeNome(nome) {
    console.log(`Olá, ${nome}`);
}

let nome = prompt("Digite seu nome");
recebeNome(nome);


// Desafio - 3
let recebeNumero = parseInt(prompt("Informe um número e te mostrarei o dobro dele"));

function oDobroDoNumero(numero) {
    return (numero * 2);
}

let resultado = oDobroDoNumero(recebeNumero);
alert(`O dobro do número informado é: (${resultado})`);


// Desafio - 4
function retornaMedia(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

function numeroAleatorio(numero) {
    return Math.floor(Math.random() * 1000 + 1);
}

let numero1 = numeroAleatorio();
let numero2 = numeroAleatorio();
let numero3 = numeroAleatorio();

resultado = retornaMedia(numero1, numero2, numero3);

console.log(`O resultado da média entre
    (${numero1}) + (${numero2}) + (${numero3}) é igual a (${resultado})`);


// Desafio 5
function retornaMedia(numero1, numero2) {
    return (numero1 + numero2) / 2;
}

numero1 = numeroAleatorio();
numero2 = numeroAleatorio();

resultado = retornaMedia(numero1, numero2);

console.log(`O resultado da média entre
    (${numero1}) + (${numero2}) é igual a (${resultado})`);


// Desafio - 6
numero1 = numeroAleatorio();

resultado = oDobroDoNumero(numero1);

console.log(`O dobro do número (${numero1}) é igual a (${resultado})`);