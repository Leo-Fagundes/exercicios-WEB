const nome = 'Leo' // contexto lexico 1

function exec() {
    const nome = 'zin' // conexto lexico 2
    return nome
}

console.log(nome)
console.log(exec())
console.log(nome.concat(exec()))

