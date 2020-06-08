function calculoImc(peso, altura) {
    imc = peso / (altura * altura)
    console.log(imc)
}
calculoImc(85, 1.67)

if (imc < 15 ) {console.log('Extremamente abaixo do peso')}
if (imc >= 15 && imc < 16 ) {console.log('Gravemente abaixo do peso')}
if (imc >= 16 && imc < 18.5) {console.log('Abaixo do peso ideal')}
if (imc >= 18.5 && imc < 25) {console.log('Faixa de peso ideal' )}
if (imc >= 25 && imc < 30 ) {console.log('Sobrepeso')}
if (imc >= 30 && imc < 35 ) {console.log('Obesidade grau I')}
if (imc >= 35 && imc < 40 ) {console.log('Obesidade grau II (grave)')}
if (imc >= 40) {console.log('Obesidade grau III (mórbida)')}
