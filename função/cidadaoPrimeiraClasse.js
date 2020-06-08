function fun1(){}//literal

const fun2 = function(){}// armazenada em variavel

const array = [function (a, b){return a + b}, fun1, fun2]//armazenada em array
console.log (array[0](1, 2))

const obj = {}//armazenada em atributo de objeto
    obj.falar = function() {return 'Cole'}

console.log(obj.falar())

//funcao como parametro
function run(fun){
    fun()
}
run( function() {console.log('Executando...')})

//funcao como parametro ou retorno
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(1, 2)(3)