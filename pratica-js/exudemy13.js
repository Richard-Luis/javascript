const dias = function (diasDaSemana) {
    switch((diasDaSemana)) {
        case 1:
            return "Fim de Semana"
        case 2: 
        case 3: 
        case 4: 
        case 5: 
        case 6:
            return "Dia Útil"
        case 7:
            return "Fim de Semana"
        default :
        return "Dia Inválido"
    }
}

console.log(dias(3))
console.log(dias("e"))
console.log(dias(1))