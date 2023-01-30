function Soma(valor1, operacao, valor2){
    switch(operacao){
        case '+':
           return valor1 + valor2
        case '-':
           return valor1 - valor2
        case '*':
           return valor1 * valor2
        case '/':
           return valor1 / valor2
        default:
           return "Operação inválida"
    }
}

console.log(Soma(2,'+',3))
console.log(Soma(2,'/',3))
console.log(Soma(2,'-',3))
console.log(Soma(2,'*',3))