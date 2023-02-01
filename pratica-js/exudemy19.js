function lanche(codigoLanche, qtd){
    switch (codigoLanche){
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            console.log("Código do produto não encontrado!")
    }
}

console.log(lanche(100, 2))
console.log(lanche(200, 3))
console.log(lanche(300, 3))
console.log(lanche(400, 3))
console.log(lanche(500, 3))
console.log(lanche(600, 3))
console.log(lanche(10, 3))