function getIntAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getIntAleatorio (-1, 10)
    console.log(`Opcao ${opcao}.`)
   } while(opcao != -1)
console.log('FIM')