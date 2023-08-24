//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

if (quantidadeDeAguaIngerida <= 1.5) {
    console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!") //risco alto menor de 1.5
} else if (quantidadeDeAguaIngerida >= 1.6 && quantidadeDeAguaIngerida <= 3) {
    console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!") //risco médio até 3
} else {
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!") //nenhum risco, qualquer valor acima de 3
}