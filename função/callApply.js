function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(3)}`
}

const notebook = {
    nome:'Notebook',
    preco:'3.000',
    desc:0.15,
    getPreco
}
console.log(notebook.nome, notebook.getPreco())

const carro = { 
    nome: 'Onix',
    preco: 50.000,
    desc: 0.07,
}
console.log(carro.nome, getPreco.call(carro))
console.log(carro.nome, getPreco.call(carro))

