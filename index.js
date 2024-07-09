
function formatMoney(value){
    //arredondar para cima, para nao ficar faltando valores impares
    value = Math.ceil(value * 100) / 100
    
    value = value.toFixed(2)
    return 'R$. ' + value 
}

function formatSplit(value) {
    if (value == 1)     
        return value + ' Pessoa'
    else
        return value + ' Pessoas'
}

function update(){
    let valorConta = document.getElementById('valorConta').value
    let porcentagemGorjeta = document.getElementById('porcentagemGorjeta').value
    let gorjeta = valorConta / 100 * porcentagemGorjeta
    let total = Number(valorConta) + Number(gorjeta)
    let quantPessoas = document.getElementById('quantPessoas').value
    let valorPessoa = total / quantPessoas

    document.getElementById('porcentagemAtual').innerHTML = porcentagemGorjeta + '%'
    document.getElementById('valorGorjeta').innerHTML = formatMoney(gorjeta)
    document.getElementById('total').innerHTML = formatMoney(total)
    document.getElementById('mostrarPessoas').innerHTML = formatSplit(quantPessoas)
    document.getElementById('valorPessoa').innerHTML = formatMoney(valorPessoa)
}
    





