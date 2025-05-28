let numeros = [];
let numero;

for (let contadorNum = 0; contadorNum < 10; contadorNum++) {
    numero = parseInt(prompt(`Digite seu ${contadorNum + 1}º número:`));
    if (isNaN(numero)) {
        alert("O valor digitado é inválido. Digite um número válido.");
        contadorNum--;
    } else {
        numeros[contadorNum] = numero;
    }   
}
console.log(`Os numeros da lista são: ${numeros}`);

for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(`O número par: ${numeros[i]} está na posição: ${i} `);
    }
}