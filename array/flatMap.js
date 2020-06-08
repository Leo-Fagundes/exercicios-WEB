const escola = [{
    nome: 'Turma Manha', 
    alunos: [
        {   nome: 'Alan',
            nota: 7.3 },
        {   nome:'Joaquim',
            nota: 9.3 } 
    ]},{
    nome: 'Turma Tarde',
    alunos: [ 
        {   nome: 'Maria', 
            nota: 9.2 },
        {   nome: 'Pedro', 
            nota: 9.8 }
    ]},{
    nome: 'Turma Noite',
    alunos: [
        {   nome: 'Ana', 
            nota: 7.7 },
        {   nome: 'Jorge', 
            nota: 6.8 }
    ]}

]

console.log(escola)

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)