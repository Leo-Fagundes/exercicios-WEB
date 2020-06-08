function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        return `Valor acima do permitido: ${area} m2.`
    } else {
        return `Area: ${area} m2`
    }
}

console.log(area(10, 20))
console.log(area(1,2))