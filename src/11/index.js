//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 60;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;


//Resposta A

let valorDaParcela = rendaMensalEmCentavos * 18 / 100; //VAR de %


if (mesesDecorridos >= 60 || totalJaPagoPeloAluno >= 180000) {  //primeiro vai verificar se o contrato está encerrado por meses ou valor pago, se não tiver encerrado ele verifica as outra duas possibilidade
    console.log("O seu contrato já está quitado")

} else if (rendaMensalEmCentavos >= 200000 && mesesDecorridos <= 60) { //calcula o valor da parcela
    console.log(`O valor da sua parcela é de R$ ${valorDaParcela}`)

} else if (rendaMensalEmCentavos <= 200000) {                      //isenta o aluno no mês
    console.log("Você não precisa pagar nada nesse mês")
}
