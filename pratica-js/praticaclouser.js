let produtotv = "Tv Samsung 33"
let preco = 3000
let desconto = 0.8

console.log(`${produtotv}:`, preco * desconto)

function produtotv33() {
    let tv33 = 'Tv Samsung 33: '
    let preco = 3000
    let desconto = 0.8
    let precofinal = preco * desconto

    function Samsung33() {
        return tv33 + precofinal
    }
    return Samsung33
}

const Vender = produtotv33 ()
console.log(Vender())