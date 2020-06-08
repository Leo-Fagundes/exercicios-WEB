function carro(veloMax = 200, delta = 5) {
    let veloAtual = 0
    this.acelerar = function () {
        if(veloAtual + delta <= veloMax) {
            veloAtual += delta
        } else { 
            veloAtual = veloMax }

    }

    this.getVeloAtual = function (){
        return veloAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVeloAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVeloAtual())