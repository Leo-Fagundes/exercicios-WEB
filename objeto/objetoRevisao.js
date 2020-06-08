//coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto.marca = 'Generica'
produto.preco = 100.00

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    fabricante: 'Chevrolet',
    modelo: 'Onix',
    valor: 50.000,
    proprietario: {
        nome:'Leonardo',
        idade:52,
        endereco: {
            logradouro: 'Rua Areado',
            numero: 235,
            complemento:'',
            bairro: 'Carlos Prates',
        }
    },
    condutores: [{
        nome: 'Maria',
        idade: 48,
    }, { 
        nome: 'Melissa',
        idade: 18,
    }],
    calcularValorSeguro: function(){
        //...
    },
}

console.log(carro)
carro.proprietario.endereco.complemento = 'casa 2'
console.log(carro)

delete carro.condutores
delete carro.calcularValorSeguro

console.log(carro)