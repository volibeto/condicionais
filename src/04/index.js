let ladoA = 6;
let ladoB = 6;


if (ladoA === ladoB) { //Se for igual vai entrar na chave para verificar as outras fases
    if (ladoA === 0) {
        console.log("Bucha Branca")
    } else if (ladoA === 1) {
        console.log("Bucha Ás")
    } else if (ladoA === 2) {
        console.log("Bucha Duque")
    } else if (ladoA === 3) {
        console.log("Bucha Terno")
    } else if (ladoA === 4) {
        console.log("Bucha Quadra")
    } else if (ladoA === 5) {
        console.log("Bucha Quina")
    } else if (ladoA === 6) {
        console.log("Bucha Sena")
    }
} else {
    console.log("Não é uma Bucha") //Será impresso se não for uma bucha
}