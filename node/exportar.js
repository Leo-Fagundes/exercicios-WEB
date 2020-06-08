console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports) // apenas module.exports sera exportado (ficara visivel fora do modulo/arquivo)

exports = null
module.exports = { public: true}