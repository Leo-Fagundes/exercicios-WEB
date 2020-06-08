function Pessoa() {
    this.idade = 0

    self = this
    setInterval(function(){
        self.idade++//this.idade++
        console.log(self.idade)//this.idade
    }/*.bind(this)*/,1000)
}

new Pessoa