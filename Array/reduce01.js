const alunos = [
    {nome: 'Richard', nota: 9.0, bolsista: false},
    {nome:'Isabel', nota: 8.5, bolsista: true},
    {nome:'Milena', nota: 6.6, bolsista: true},
    {nome:'Beto', nota: 7.9, bolsista: false}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)