const notas = [7.1, 6.5, 5.8, 9.5, 10, 5.5, 7.6]
//sem callback
const notasBaixas1 = []
    for (let i in notas){
        if (notas[i] < 7){
            notasBaixas1.push(notas[i])
        }
    }
console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)