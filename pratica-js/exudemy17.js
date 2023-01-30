function funcionario(plano, salario){
    switch(plano){
        case 'a':
            return salario * 1.1
        case 'b':
            return salario * 1.15
        case 'c':
            return salario * 1.5
        default:
            return 'Plano inválido'
    }
}

console.log(funcionario('a', 1000))
console.log(funcionario('b', 1000))
console.log(funcionario('c', 1000))