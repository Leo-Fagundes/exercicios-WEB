const pilotos = ['Vettel', 'Hamilton', 'Ricciardo', 'Bottas']
console.log(pilotos)
pilotos.pop() // exclui ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona ao final do array
console.log(pilotos)

pilotos.shift() // exclui o primeiro elemento do array
console.log(pilotos.shift())

pilotos.unshift('Alonso') // adiciona ao inicio do array
console.log(pilotos)

pilotos.splice(3, 0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(4,2)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//cria novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 3)//cria novo array a apartir do indice 1, ao 3, excluindo o indice 3
console.log(algunsPilotos2)