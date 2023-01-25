const dinheiro = (salario) =>{
    salario = `R$ ${salario.toFixed(2).toString().replace('.', ',')}`
    console.log(salario)
}

dinheiro(0.1 + 0.2)