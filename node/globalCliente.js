require('./global')

console.log(minhaApp.saudacao())
minhaApp.nome = 'Eita' // freeze
console.log(minhaApp.nome)