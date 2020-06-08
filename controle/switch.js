const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('gênio')
            break
        case 8:
        case 7:
        case 6:
            console.log('passou')
            break
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('se fudeu')
            break
        default:
            console.log('nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(0)
imprimirResultado(12)