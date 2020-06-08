function tratar(erro){
    throw {
        nome: erro.name,
        msg: erro.name,
        date: new Date
    }
}

function atoA(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome:'Xuxa'}
atoA(obj)