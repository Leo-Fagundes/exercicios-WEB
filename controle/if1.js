function iai(nota) {
    if(nota >= 6){
        console.log('Passou! ' + nota)
    }
}
iai(9.1)
iai(4.3)

function eVerdade(valor){
    if(valor){
        console.log('sim ' + valor)
    }
}

eVerdade()
eVerdade(null)
eVerdade(undefined)
eVerdade(NaN)
eVerdade('')
eVerdade(0)
eVerdade(-1)
eVerdade(' ')
eVerdade('?')
eVerdade([])
eVerdade([1, 2])
eVerdade({})
