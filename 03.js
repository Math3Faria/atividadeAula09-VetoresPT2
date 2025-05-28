let numeros = [];
let posicoesEncontradas = [];
let numDigitado;


for (let i = 0; i < 30; i++) {
    numeros[i] = Math.ceil(Math.random() * 15);
}

console.log(`Foram sorteados os números: ${numeros}`);
numDigitado = parseInt(prompt("Digite um número entre 1 e 15 para saber o local que ele esta no vetor: "));

if (isNaN(numDigitado) || numDigitado < 1 || numDigitado > 15) {
    alert("Número inválido. Digite um número, e que seja de 1 a 15.");
} else {
    let qtdVezes = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == numDigitado) {
            posicoesEncontradas[qtdVezes] = i;
            qtdVezes++;
        }
    }

    if (qtdVezes > 0) {
        let resultado = "" + posicoesEncontradas[0];

        for (let i = 1; i < qtdVezes; i++) {
            resultado += ", " + posicoesEncontradas[i];
        }

        alert(`O número ${numDigitado} apareceu ${qtdVezes} vezes nas posições: ${resultado}`);
        console.log(`O número ${numDigitado} apareceu ${qtdVezes} vezes nas posições: ${resultado}`);
    } else {
        alert(`O número ${numDigitado} não foi encontrado no vetor.`);
    }
}
