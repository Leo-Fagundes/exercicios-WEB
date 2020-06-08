let aprovados = new Array('Leo', 'Maria', 'Mel')
console.log(aprovados)

aprovados = ['Leo', 'Maria', 'Mel']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Lara'
console.log(aprovados[3])

aprovados.push('Joao')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Zeca'
console.log(aprovados[8])
console.log(aprovados)
console.log(aprovados.length)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Leo', 'Maria', 'Mel']
aprovados.splice(0, 0, 'Leticia' ) // a partir do indice, exclui, adiciona
console.log(aprovados)

aprovados.includes
