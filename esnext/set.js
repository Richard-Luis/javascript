// Não aceita repetição/não indexada

const times = new Set()
times.add('Internacional')
times.add('Brasil').add('Argentina').add('Inter de milão')
times.add('Caxias do Sul')
times.add('CSA')

console.log(times)
console.log(times.size)
console.log(times.has('Internacional'))
console.log(times.has('Internacional'))
times.delete('Caxias do Sul')
console.log(times.has('Caxias do Sul'))

const nomes = ['Raquela', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)