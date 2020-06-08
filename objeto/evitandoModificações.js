// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Maria', idade: 30 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Moreira'
delete pessoa.nome
pessoa.idade = 28
console.log(pessoa)

//Object.freeze = seal + valores constantes
