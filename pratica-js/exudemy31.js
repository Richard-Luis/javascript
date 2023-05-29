function numerosNegativos(vetor){
    let negativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        }
    }
    return negativos
}

vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))