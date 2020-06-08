//let e const
{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)

//template string
const produto = 'Notebook bom'
console.log(`${produto} é caro!`)

//destructuring
const [l, e, ...tras] = 'Carocha'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Melissa', idade: 1}
console.log(i, nome)