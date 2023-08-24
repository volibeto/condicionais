//valor do produto comprado.
const valorDoProduto = 1000;
//quantidade de parcelas
const quantidadeDoParcelamento = 10;
//valor pago


const valorPago = 500; //alterando o valor var diminuir o restante das parcelas

const valordaparcela = 100; //Valor da parcela

const restomes = valorDoProduto - valorPago; //Calcula o restante dos meses no valor total restante

const mes = String(restomes)[0]; //Usei string para selecionar somente o primeiro caractere da VAR restomes e automatizar o calculo


console.log(`Restam ${mes} de R$${valordaparcela}.`)