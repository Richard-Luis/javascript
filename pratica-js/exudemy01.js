function subtracao(a = 2, b = 6) {
   return a - b
}
console.log(subtracao())

function soma(c = 3, d = 5) {
    return c + d
}
console.log(soma())

function multiplicacao(e = 5, f = 5) {
    return e * f
}
console.log(multiplicacao())

function divisao(g = 6, h = 2){
    return g / h
}
console.log(divisao())

const calc = (n1, n2) => {
	console.log(`Resultados
	Soma: ${n1} + ${n2} =  ${n1 + n2}
	Subtração: ${n1} - ${n2} =  ${n1 - n2}
	Multiplicação: ${n1} * ${n2} =  ${n1 * n2}
	Divisão: ${n1} / ${n2} =  ${n1 / n2}`)
}
calc(2, 5)