//nao aceita repetição / não indexada
const times = new Set()
times.add('Atletico')
times.add('Cruzeiro').add('São Paulo').add('Flamengo')
times.add('Atletico')

console.log(times)
console.log(times.size)
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('Cruzeiro')
console.log(times.has('Cruzeiro'))

const nomes = ['Mel', 'Leo', 'Maria', 'Mel']
const nomesSet = new Set(nomes)
console.log(nomesSet)