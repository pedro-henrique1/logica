alert("Boas vindas ao jogo mundo secreto");
let NumeroMax = 100;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um numero de 1 e " + NumeroMax);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert("O numero secreto e menor que " + chute);
        } else {
            alert("O numero secreto e maior que " + chute);
        }
        tentativas++;

    }

}
let palTentativa = tentativas > 1 ? " tentativas" : " tentaiva"
alert("acertou o numero é " + numeroSecreto + " com " + tentativas + palTentativa);

console.log(numeroSecreto);








