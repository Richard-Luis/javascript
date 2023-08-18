// let e const

const { template } = require("lodash");

{
    var a = 2;
    let b = 3;
    console.log(b)
}
console.log(a);
// a variavel a nao tem escopo de bloco



// template String
const produto = "Produto"
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)