function gerarNumerosEntre(min, max, numerosSorteados){
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosSorteados.includes(aleatorio)){
            reject('Número Já Sorteado!')
        }else{
            resolve(aleatorio)
        }
        
    })
}

async function gerarMegaSena(qtdeNumeros){
    try{
        const numeros = []
            for(let _ of Array(qtdeNumeros).fill()) {
                numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e){
        throw "Que Chato!!!"
    }
        
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)