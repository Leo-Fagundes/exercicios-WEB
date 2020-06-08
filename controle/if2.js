function teste1(numero){
    if(numero > 7)
        console.log(numero)
        console.log('fim')
    
}
teste1(6)
teste1(8)

function teste2(numero){
    if(numero > 7); { // errado ;
        console.log(numero)
        console.log('fim')
    }
}

teste2(6)
teste2(8)