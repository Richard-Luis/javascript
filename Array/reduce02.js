const alunos = [
    {nome: 'Richard', nota: 9.0, bolsista: false},
    {nome:'Isabel', nota: 8.5, bolsista: true},
    {nome:'Milena', nota: 6.6, bolsista: true},
    {nome:'Beto', nota: 7.9, bolsista: false}
]

// Desafio: Todos alunos são bolsistas ?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio: Tem algum aluno Bolsista ?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))