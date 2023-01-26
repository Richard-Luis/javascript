const jurosSimples = (capital, taxa, aplicacao) =>{
    return capital + (capital * taxa * aplicacao)
}

const jurosComposto = (capital, taxa, aplicacao) =>{
    return capital * (1 + taxa) ** aplicacao
}

console.log("Juros Simples: " + jurosSimples(100, 10 / 100, 2).toFixed(2))
console.log("Juros Composto: " + jurosComposto(100, 10 / 100, 2).toFixed(2))