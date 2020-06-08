Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const carrinho = [
    { nome: 'Borracha', preco: 3.45, fragil: false },
    { nome: 'Caderno', preco: 13.90, fragil: true },
    { nome: 'Kit de lapis', preco: 39.90, fragil: true },
    { nome: 'Caneta', preco: 7.50 , fragil: true },
]

const efragil = produto => produto.fragil
const ecaro = produto => produto.preco > 10

console.log(carrinho.filter2(efragil).filter2(ecaro))