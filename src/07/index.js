const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

if (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos >= 2855970) {  //verifica tds os filtros e se for vdd e imprimi a mensagem, se não for vdd pula a linha
    console.log("PEGA LEAO")
} else if (aposentada === false && portadoraDeDoenca === false && totalDeRendimentos <= 2855969) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else {
    console.log("ISENTO") //caso nenhuma das opções forem vdd, irá imprimir isento
}
