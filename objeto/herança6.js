function cliente(saudacao, nome) {
    this.saudacao = saudacao
    this.nome = nome
}
const clienteentra = new cliente ('Bem vindo', 'Joao')
const clientesai = new cliente ('Até logo', 'Joao')

console.log(clienteentra, clientesai)