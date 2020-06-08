const soma = function(x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(1, 2)
imprimirResultado(1, 2, soma)
imprimirResultado(1, 2, function(x, y){ return x - y})
imprimirResultado(1, 2, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log('falei')
    }
}

pessoa.falar()