let numeros = [];
let posicoesEncontradas = [];
let numDigitado;
let quantVezesApareceu = 0;

for (let indice = 0; indice < 30; indice++) {
    let numeroAleatorio = Math.ceil(Math.random() * 15);
    numeros[indice] = numeroAleatorio;
}
console.log(`Foram sorteados os números: ${numeros}`);



numDigitado = parseInt(prompt("Digite o número que deseja saber a posição no vetor, entre 1 e 15:"));

if (isNaN(numDigitado) || numDigitado < 1 || numDigitado > 15) {
    alert("Número inválido! Digite um número de 1 a 15.");
} else {
    let indiceResultado = 0;

    for (let indice = 0; indice < 30; indice++) {
        if (numeros[indice] == numDigitado) {
            posicoesEncontradas[indiceResultado] = indice;
            indiceResultado++;
            quantVezesApareceu++;
        }
    }

    if (quantVezesApareceu > 0) {
        let resultado = "";
        for (let i = 0; i < quantVezesApareceu; i++) {
            resultado += posicoesEncontradas[i];
            if (i < quantVezesApareceu - 1) {
                resultado += ", ";
            }
        }
        console.log(`O número ${numDigitado} foi encontrado ${quantVezesApareceu} vezes nas posições: ${posicoesEncontradas[i]}`);
        alert(`O número ${numDigitado} foi encontrado ${quantVezesApareceu} vezes nas posições: ${posicoesEncontradas[i]}`);
    } else {
        alert(`Não tem o número ${numDigitado} no vetor`);
    }
}