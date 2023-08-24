const jogada1 = 1;
const jogada2 = 3;

//seu código aqui
let soma = jogada1 + jogada2; //Nova variavel para somar as jogadas 1 e 2

if ('13579'.includes(soma)) { //usando o .includes(), o sistema irá verificar se os valores dentro do [] estão presentes, se sim, irá imprimir
    console.log("Impar venceu")
} else {
    console.log("Par venceu") //caso não tenho nenhum valor dentro do  [] para imprimir, será impresso o ELSE
}

