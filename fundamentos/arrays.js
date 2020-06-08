const valores = ['Mel',8.9,6.4,8.3]
console.log(valores[0], valores[3])
console.log(valores[4])

console.log(valores)
console.log(valores.length)

valores.push({a:3}, true, null, 'legal')
console.log(valores)
console.log(typeof valores)

delete valores[1]
console.log(valores)
