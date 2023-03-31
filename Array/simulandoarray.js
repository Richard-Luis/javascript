const quaseArray = {0: 'Richard', 1: 'Isabel', 2: 'Beto'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Richard', 'Isabel', 'Beto']
console.log(quaseArray.toString(), meuArray)