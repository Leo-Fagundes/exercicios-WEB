const valor = 'Global'

function minha() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minha()
}
exec()