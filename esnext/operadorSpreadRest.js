//operador ... rest(juntar) spread(espalhar)
// usar rest com parametro de função
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4, 5))

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 15000 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Leo', 'Maria', 'Mel']
const grupoFinal = [...grupoA, 'Lara', 'João']
console.log(grupoFinal)