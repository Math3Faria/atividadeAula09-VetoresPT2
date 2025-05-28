let numeros = [];
let posicoesEncontradas = [];
let numeroChave = parseInt(prompt("Digite o número que deseja saber a posição no vetor, entre 1 e 15:"));


for (let i = 0; i < 30; i++) {
    numeros[i] = Math.ceil(Math.random() * 15);
}
console.log(`Foram sorteados os números: ${numeros}`);

if (isNaN(numeroChave) || numeroChave < 1 || numeroChave > 15) {
    alert("Número inválido! Digite um número de 1 a 15.");
} else {
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == numeroChave) {
            posicoesEncontradas[contador] = i;
            contador++;
        }
    }

    if (contador > 0) {
        let resultado = "" + posicoesEncontradas[0];

        for (let i = 1; i < contador; i++) {
            resultado += ", " + posicoesEncontradas[i];
        }

        alert(`O número ${numeroChave} apareceu ${contador} vezes nas posições: ${resultado}`);
    } else {
        alert(`O número ${numeroChave} não foi encontrado no vetor.`);
    }
}
