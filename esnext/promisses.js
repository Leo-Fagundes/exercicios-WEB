function falarDepoisDe (segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(2, 'Bumba ')
    .then(frase => frase.concat('neguinho!'))
    .then(outraFrase => console.log(outraFrase))