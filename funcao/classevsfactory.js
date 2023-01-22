class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}!`)
    }
}

const p1 = new Pessoa(`Richard`)
p1.falar()


//factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}!`)
    }
}

const p2 = criarPessoa(`Richard`)
p2.falar()