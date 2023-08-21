// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

const { spread } = require("lodash")

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com Array
const grupoA = ['João', 'Marta', 'Claudia']
const grupoFinal = ['Isa', ...grupoA, 'Rafaela']
console.log(grupoFinal)