const pai = { nome:'Leonardo', corCabelo: 'Castanho'}
const filha1 = Object.create(pai)
filha1.nome = 'Mel'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Manu', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Valentina'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(`Proprio: ${key}`) : console.log(`Por herança: ${key}`)
}
