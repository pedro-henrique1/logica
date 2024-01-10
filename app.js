alert("Boas vindas ao jogo mundo secreto");

let numeroSecreto = 5;

let chute;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um numero de 1 a 30");
    if (numeroSecreto == chute) {
        alert("acertou")
    } else {
        if (numeroSecreto > chute) {
            alert("O numero secreto e menor que " + chute);
        } else {
            alert("O numero secreto e menor que " + chute);
        }

    }
}








