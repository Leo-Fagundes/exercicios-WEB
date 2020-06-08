console.log(typeof String, typeof Array, typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log( 'Leonardo'.reverse())