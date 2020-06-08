// ES8: Object.values / Object.entries
const obj = {a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação literal
const nome = 'Mel'
const pessoa = {
    nome,
    ola() {
        return 'Olá'
    }
}
console.log(pessoa.ola(), pessoa.nome)

// class
class animal {}
class cachorro extends animal {
    falar() {
        return 'au au!'
    }
}
console.log(new cachorro().falar())