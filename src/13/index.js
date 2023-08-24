//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

const cheque = valorDoProduto * 3 / 100;
const credito = valorDoProduto * 5 / 100;
const dinheiroDebito = valorDoProduto * 10 / 100;

if (tipoDePagamento === "cheque") {
    console.log("Valor a ser pago é de R$" + cheque.toFixed(2))

} else if (tipoDePagamento === "credito") {
    console.log("Valor a ser pago é de R$" + credito.toFixed(2))

} else if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
    console.log("Valor a ser pago é de R$" + dinheiroDebito.toFixed(2))
}