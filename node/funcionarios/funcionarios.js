const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    const china = funcionarios => funcionarios.pais == 'China'
    const mulher = funcionarios => funcionarios.genero == 'F'
    const menorSalario = (func, funcAtual) => {
        return  func.salario < funcAtual.salario ? func : funcAtual
        }

    const funcionario = funcionarios.filter(china).filter(mulher).reduce(menorSalario)

    console.log(funcionario)
})
