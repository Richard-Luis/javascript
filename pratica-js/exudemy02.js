function triangulo(direita = 6, esquerda = 6, base = 10) {
        if (direita != base){
            return `Escaleno`
        } else{
            return `Isósceles`
        }
}

console.log(triangulo())