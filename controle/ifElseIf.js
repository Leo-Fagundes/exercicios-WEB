Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('gênio')
    } else if(nota.entre(6, 8)){
        console.log('passou')
    } else {
        console.log('Se fudeu')
    }

}
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)