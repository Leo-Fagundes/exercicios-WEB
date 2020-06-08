const notas = [9.9, 8.5, 5.4, 10, 4.5]
for(let nota in notas) {
    console.log(nota, `nota ${notas[nota]}`)
}

const pessoa ={
    nome: 'Leo',
    sobrenome: 'Fagundes',
    idade: 34,
    peso: 68,
}

for (let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}.`)
}