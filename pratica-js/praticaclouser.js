function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        loja: 'Quero Quero',
        desconto: 500
    }
}

console.log(criarProduto('Tv Samsung 33: ', 2400))