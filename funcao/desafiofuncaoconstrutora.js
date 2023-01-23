function Pessoa(nome) {
        this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}!`)
    }
}

const p1 = new Pessoa(`Richard`)
p1.falar()

function Pessoa(nome) {
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}!`)
    }
}
const p2 = new Pessoa (`Richard`)
p2.falar()