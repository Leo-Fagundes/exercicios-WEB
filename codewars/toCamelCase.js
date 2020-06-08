function toCamelCase (string){
    var result = ""
    for (var i=0; i<string.length; i++) {
      if ( (string.charAt(i) == '-') || (string.charAt(i) == '_') ) {
        i++
        if (i < string.length) {
          result += string.toUpperCase().charAt(i)
        }
      } else {
        result += string.charAt(i)
      }
    }
    return result
}


console.log(toCamelCase("the-stealth-warrior")) // returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")) // returns "TheStealthWarrior"

