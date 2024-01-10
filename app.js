alert("Boas vindas ao jogo mundo secreto");

let numeroSecreto = 5;

let chute;
let tenetativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um numero de 1 a 30");
    if (numeroSecreto == chute) {
        alert("acertou o numero é " + numeroSecreto + " e o numeros de tentais foi " + tenetativas)
    } else {
        if (numeroSecreto > chute) {
            alert("O numero secreto e menor que " + chute);
        } else {
            alert("O numero secreto e menor que " + chute);
        }
        tenetativas++;

    }
}








