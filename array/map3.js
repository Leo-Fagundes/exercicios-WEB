Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i , this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de lapis", "preco": 39.90 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]
console.log(carrinho)

const paraObj = json => JSON.parse(json)
const preco = produto => produto.preco

const resultado = carrinho.map2(paraObj).map2(preco) 
console.log(resultado)