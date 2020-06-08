const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in valores) {
    if( x == 5){
        break
    }
    console.log(`Indice ${x} = ${valores[x]}`)
}

for (let y in valores) {
    if(y == 5){
        continue
    }
    console.log(`Indice ${y} = ${valores[y]}`)
}