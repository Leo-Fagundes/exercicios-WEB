const quaseArray = { 0: 'Leo', 1: 'Maria', 2: 'Mel'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Leo', 'Maria', 'Mel']
console.log(quaseArray.toString(), meuArray)