// notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Televisao', 1649.99, 0.10)
const p2 = new Produto ('Notebook', 2499.99, 0.20)

console.log(p1.nome,p1.getPrecoComDesconto(), p2.nome, p2.getPrecoComDesconto())

//função factory
function calcularSalario (nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
 
const f1 = calcularSalario ('Joao', 2500, 3)
const f2 = calcularSalario ('Jose', 1200, 5)

console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Melissa'
console.log(filha)

//JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)