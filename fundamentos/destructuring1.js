const cliente = {
    razaoSocial: 'padaria',
    nome: ' zeze',
    endereco:{
        rua: 'longe',
        num: 100,
    }

}

const {nome, razaoSocial} = cliente
const {endereco:{rua, num}} = cliente
console.log(nome, razaoSocial)
console.log('Rua', rua, num)