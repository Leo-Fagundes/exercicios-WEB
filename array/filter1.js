const carrinho = [
    { nome: 'Borracha', preco: 3.45, fragil: false },
    { nome: 'Caderno', preco: 13.90, fragil: true },
    { nome: 'Kit de lapis', preco: 39.90, fragil: true },
    { nome: 'Caneta', preco: 7.50 , fragil: true },
]

const efragil = produto => produto.fragil
const ecaro = produto => produto.preco > 10

console.log(carrinho.filter(efragil).filter(ecaro))