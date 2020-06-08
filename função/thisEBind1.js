const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) // saudacao recebe valor do dono da funcao falar, no caso, pessoa
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito -> undefined

const falarDePessoa = pessoa.falar.bind(pessoa)// bind é funcao q funciona como this
falarDePessoa()