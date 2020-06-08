function countBits(dec) {
    
    let bin =  (dec >>> 0).toString(2)
    let array = bin.split("")
    const ones = array.reduce((sum, num) => sum + Number(num), 0)   
    return ones
}



console.log(countBits(1444))

