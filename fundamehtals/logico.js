function compras(trabalho1, trabalho2) {
    const comprarsorvete = trabalho1 || trabalho2 // || = ou
    const comprartv50 = trabalho2 && trabalho2 // && = os dois dara certo
    const comprartv32 = trabalho1 != trabalho2
    const mantersaudavel = !comprarsorvete

    return {comprarsorvete, comprartv50, comprartv32, mantersaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))