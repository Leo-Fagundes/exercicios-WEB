/*
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000 */



function converter(roman){
  let number = 0
  let values = { M:1000, D:500, C:100, L:50, X:10, V:5, I:1 }
  let exception = ["CD", "CM", "XL", "XC", "IV", "IX"]
    for (let i = 0; i < roman.length; i++){
        exception.indexOf( roman[i] + roman[i+1]) === -1 
                     ? number += values[roman[i]] 
                     : number -= values[roman[i]] 
    } return number
}

  console.log(converter("XXI"))