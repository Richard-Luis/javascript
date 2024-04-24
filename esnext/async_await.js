function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve() , tempo)
    })
}

//  esperarPor(2000)
//     .then(() => console.log('Executando Promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando Promise 3...'))

// async function executar(){
//     await esperarPor(1000)
//     console.log('Async/Await 1...')

//     await esperarPor(1000)
//     console.log('Async/Await 2...')

//     await esperarPor(1000)
//     console.log('Async/Await 3...')

//     // retirando o Await as linhas sao executadas ao mesmo tempo
// }

// executar()


function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 3000)
    })
}

async function executar(){
    let valor = await retornarValor()

    await esperarPor(1000)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1000)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1000)
    console.log(`Async/Await ${valor + 2}...`)

    // retirando o Await as linhas sao executadas ao mesmo tempo

    return valor + 3
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}

executar().then(console.log)