function friend (friends) {
    const realFriends = []
    for (let i = 0; i < friends.length; i++){
        const Friend = friends[i].split('')
        if(Friend.length == 4){ 
            realFriends.push(Friend.join(''))
        }
    }
    return realFriends
}


console.log(friend(["Ryan", "Kieran", "Mark"]))// ["Ryan", "Mark"])
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])) //["Ryan"])
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))// ["Jimm", "Cari", "aret"])
console.log(friend(["Love", "Your", "Face", "1"]))// ["Love", "Your", "Face"])
