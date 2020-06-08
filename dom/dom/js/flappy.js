function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)
    
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px` 
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

function Barreiras (altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3),

    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }
            const meio = largura / 2
            const cruzou = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if(cruzou) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY= y => this.elemento.style.bottom = `${y}px`
    
    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 7 : -4)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) { 
            this.setY(0) 
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}

function Progresso () {
    this.elemento = novoElemento('span', 'progresso')
    this.placar = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.placar(0)
}

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top    

        return horizontal && vertical
}

function Bateu(passaro, barreiras) {
    let bateu = false
    barreiras.pares.forEach(ParDeBarreiras => {
        if(!bateu) {
            const superior = ParDeBarreiras.superior.elemento
            const inferior = ParDeBarreiras.inferior.elemento
            bateu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return bateu
}

function Perdeu(texto) {
    this.elemento = novoElemento ('span', 'perdeu')
    this.fim = texto => {
        this.elemento.innerHTML = texto
    }
    this.fim(texto)    
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400, () => progresso.placar(++pontos))
    const passaro = new Passaro(altura)
    areaDoJogo.appendChild(passaro.elemento)
    areaDoJogo.appendChild(progresso.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    
    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if(Bateu(passaro, barreiras)) {
                clearInterval(temporizador)
                const perdeu = new Perdeu('Game Over')
                areaDoJogo.appendChild(perdeu.elemento)
            }
        },20)
    }
}

new FlappyBird().start()