const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade >= 13 && possuiPatologia === false && altura >= 150 && ehEstudante === true) {   //verifica tds os filtros e se for vdd e imprimi a mensagem, se não for vdd pula a linha
    console.log("O seu ingresso é 10 reais")
} else if (idade >= 13 && possuiPatologia === false && altura >= 150 && ehEstudante === false) {
    console.log("O seu ingresso é 20 reais")

} else {
    console.log("ACESSO NEGADO")   //caso nenhuma das opções forem vdd, irá imprimir isento
}
