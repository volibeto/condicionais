const nota = 8.9;


if (nota >= 9 && nota <= 10) {
    console.log("Conceito A")
} else if (nota >= 8 && nota <= 8.9) {
    console.log("Conceito B")
} else if (nota >= 6 && nota <= 7.9) {
    console.log("Conceito C")
} else if (nota >= 4 && nota <= 5.9) {
    console.log("Conceito D")
} else if (nota < 4) {
    console.log("Conceito E")
} else {
    console.log("Digite uma nota valida") //Caso nenhuma a nota digita for diferente será impresso está linha
}