function criarProduto(produtotv, preco) {
    return {
        produtotv:'Tv55',
        preco: 3000,
        loja: 'Magazine Luiza',
        desconto: 500
    }
}

console.log(criarProduto()) // Meu

// Do professor
    function produtoCriado(nome, preco) {
        return {
            nome,
            preco,
            loja: 'Nas Lojas Quero Quero',
            desconto: 0.2
        }
    }

    console.log(produtoCriado(`Notebook`, 2199.49))
    console.log(produtoCriado(`Ipad`, 1199.49))