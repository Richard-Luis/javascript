function numero(num){
    switch (num) {
        case 0:
            return 'Número zero'
        case 1:
            return "Número um"
        case 2:
            return 'Número dois'
        case 3:
            return 'Número três'
        case 4:
            return 'Número quatro'
        case 5:
            return 'Número cinco'
        case 6:
            return 'Número seis'
        case 7:
            return 'Número sete'
        case 8:
            return 'Número oito'
        case 9:
            return 'Número nove'
        case 10:
            return 'Número dez'
        default:
            return 'Número inválido'
    }
}

console.log(numero(1))
console.log(numero(10))
console.log(numero(11))
console.log(numero(5))