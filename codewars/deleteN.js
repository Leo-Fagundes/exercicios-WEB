function deleteNth (array, n)  {
    const results = []
    const count = []
    
    array.forEach(num => {
        count[num] = count[num] ? count[num] + 1 : 1
        if(count[num] <= n) {
            results.push(num)
        }
    })
    
    return results
}

console.log( deleteNth([20,37,20,21],1) ) // return [20,37,21]
console.log( deleteNth([1,1,1,1],2) ) // return [1,1]
console.log( deleteNth([1,2,3,1,2,1,2,3],2) ) // return [1,2,3,1,2,3]
console.log(deleteNth([1,1,3,3,7,2,2,2,2],3) ) // [1, 1, 3, 3, 7, 2, 2, 2]