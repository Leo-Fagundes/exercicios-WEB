function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(1, 2)
imprimirSoma(1)
imprimirSoma()

function soma(a, b=1) {
    return a + b
}
console.log(soma(2, 2))
console.log(soma(2))