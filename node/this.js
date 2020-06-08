console.log(this === global)
console.log(this === module)
console.log(this === module.exports) // fora da função, this aponta para module.exports
console.log(this === exports)

function logThis() {
    console.log('Dentro da função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // dentro da função, this aponta para global


}

logThis()
