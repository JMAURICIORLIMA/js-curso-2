// Desafio - 1
let altura = prompt("Informe sua altura");
let peso = prompt("Informe seu peso");

function calculoIMC(altura, peso) {
    return (peso / (altura * altura));
}

let imc = calculoIMC(altura, peso);

alert(`Seu IMC é de ${imc}`);


// Desafio - 2
function calcularFatorial(numero) {
    if(numero < 0) {
        return "O fatorial não está defino para números negativos.";
    }

    if(numero === 0) {
        return 1;
    }

    let resultado = 1;

    for(let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

let numeroRecebido = Math.floor(Math.random() * 20);
console.log(numeroRecebido);

let resultadoFatorial = calcularFatorial(numeroRecebido);
console.log(resultadoFatorial);

console.log(`O fatorial de ${numeroRecebido} é: ${resultadoFatorial}`);


// Desafio - 3
function conversaoDolarParaReal(real) {
    let dolar = 4.80;

    let conversao = real / dolar;

    return conversao;

}

let quantoQuerConverter = parseFloat(prompt("Informe em reais para ser convertido"));

alert(`O valor em dolar será de ${conversaoDolarParaReal(quantoQuerConverter)}`)


// Desafio - 4
function calcularArea(largura, altura) {
    return largura * altura;
}

function calcularPerimetro(largura, altura) {
    return 2 * (largura + altura);
}

function geraNumeroAleatorio() {
    return Math.random() * 10;
}

altura = geraNumeroAleatorio();
let largura = geraNumeroAleatorio();

console.log(`Area L(${largura}) * A(${altura}) = (${calcularArea(largura, altura)})`);
console.log(`Paramentro da área 2 * (L(${largura}) * A(${altura})) = (${calcularPerimetro(largura, altura)})`)


// Desafio - 5
function calcularAreaEPerimetroCirculo(raio) {
    const pi = 3.14;
    let area = pi * Math.pow(raio, 2);
    let perimetro = 2 * pi * raio;

    console.log(`Área da sala circular (${area})`);
    console.log(`Perimetro da sala circular: (${perimetro})`);
}

let raioSalaCircular = geraNumeroAleatorio();
calcularAreaEPerimetroCirculo(raioSalaCircular);


// Desafio - 6
function tabuada(numero) {
    for(let i = 1; i <= 10; i++) {
        let multiplicacao = i * numero;
        console.log(`${i} x ${numero} = ${multiplicacao}`);
    }
}

function geraNumeroAleatorioInteiro() {
    return Math.floor(Math.random() * 20 + 1);
}

let numeroParaTabuada = geraNumeroAleatorioInteiro();
tabuada(numeroParaTabuada);