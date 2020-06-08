const pessoa1 = {
    nome: "cleyton",
    idade: "30",
    endereco : {
        rua: "avenida fagundes filho, 789"
    }
}

const pessoa2 = Object.assign({}, pessoa1)

pessoa2.endereco.rua = "alameda das rosas, 7"
pessoa2.nome = "cleyton gama"

console.log(pessoa1)
console.log(pessoa2)