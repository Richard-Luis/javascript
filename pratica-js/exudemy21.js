function convenio(idade){
    if(idade < 10){
        return 180
    } else if (idade <= 30) {
        return 150
    } else if (idade <= 60){
        return 195
    } else{
        return 230
    }
}

console.log(convenio(9))
console.log(convenio(10))
console.log(convenio(29))
console.log(convenio(31))
console.log(convenio(60))
console.log(convenio(61))