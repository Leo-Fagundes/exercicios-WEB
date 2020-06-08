function compras(trab1, trab2){
    const almocarFora = trab1 || trab2 // || ou
    const hometheater = trab1 && trab2 // && e
    const televisao = trab1 != trab2 
    const serieCpipoca = !almocarFora

    return {almocarFora, hometheater, televisao, serieCpipoca}
}

console.log(compras(true,true) )
console.log(compras(true,false) )
console.log(compras(false,true) )
console.log(compras(false,false) )