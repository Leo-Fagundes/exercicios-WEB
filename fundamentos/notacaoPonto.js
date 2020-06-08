console.log(Math.ceil(9.1))

const cliente = {}
cliente.nome = 'Chato'
console.log('Cliente', cliente.nome)

function Cliente(nome){
    this.nome = nome //torna o atributo publico
}

const cliente2 = new Cliente('Chatão')
console.log('Cliente', cliente2.nome)

