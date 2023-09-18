const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

// function primeiroElemento(array){
//     return array[0]
// }

// function primeiraLetra(string){
//     return string[0]
// }
// const letraMinuscula = letra => letra.toLowerCase()

 new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Carlos', 'Maria', 'João'])
})

.then(primeiroElemento)
.then(primeiroElemento)
// .then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)