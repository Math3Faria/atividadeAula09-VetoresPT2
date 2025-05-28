let numeros = [];
let posicoesEncontradas = [];
let numDigitado = parseInt(prompt("Digite o número que deseja saber a posição no vetor, entre 1 e 15:"));


for (let i = 0; i < 30; i++) {
    numeros[i] = Math.ceil(Math.random() * 15);
}
console.log(`Foram sorteados os números: ${numeros}`);

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
    } else {
        alert(`O número ${numDigitado} não foi encontrado no vetor.`);
    }
}
