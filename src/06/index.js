const alturaEmCm = 185;

//seu código aqui

if (alturaEmCm <= 179) {        //Usado If else e && para verificar duas expressões vdd na mesma linha
    console.log("Reprovado")
} else if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("LÍBERO")
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("PONTEIRO")
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("OPOSTO")
} else {
    console.log("CENTRAL")
}