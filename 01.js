let nomes = [];
let nome;
let listaInversa = "";

for (let contadorNomes = 0; contadorNomes < 7; contadorNomes++) {
    nome = prompt(`Digite o nome da ${contadorNomes + 1}ª pessoa:`);
    if (isNaN(nome)) {
        nomes[contadorNomes] = nome;
    } else {
        alert("O valor digitado é inválido. Digite um nome válido.");
        contadorNomes--;
    }
}

for (let i = 6; i >= 0; i--) {
    listaInversa += nomes[i] + " \n";
}
console.log(`Os nomes da lista são: ${nomes}`);
console.log("Os nomes na ordem inversa são:");
console.log(listaInversa);
