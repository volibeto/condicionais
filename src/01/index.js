const jogada1 = "pedra";
const jogada2 = "tesoura";

//seu código aqui
if (jogada1 === jogada2) { //Se a jogada1 for IDENTICA a jogada2, irá imprimir empate
    console.log("Empate")
} else if (                //caso o contrario irá comparar as outras possibilidades com o jogador1 ganhando, e irá imprimir se se for VDD
    (jogada1 === "pedra" && jogada2 === "papel") ||
    (jogada1 === "papel" && jogada2 === "tesoura") ||
    (jogada1 === "tesoura" && jogada2 === "pedra")
) {
    console.log("Jogada 1 venceu"); //será imprimido caso alguma das opções acima seja VDD
} else {
    console.log("Jogada 2 venceu"); //Será imprimida caso nenhuma das opções acima sejam VDD
}
