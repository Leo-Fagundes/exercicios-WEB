const pessoa = { nome: 'Leo'}
pessoa.nome = 'Maria'
console.log(pessoa)

//pessoa = {nome: 'Melissa'} erro

Object.freeze(pessoa)
pessoa.nome = 'Leo'
pessoa.end = "rua abc"
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)