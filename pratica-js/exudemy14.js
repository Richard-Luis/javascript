function fruta(melancia) {
    switch((melancia)) {
        case "maçã":
            console.log("Não vendemos esta fruta aqui")
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break
        case "melancia":
            console.log("Aqui está, são R$ 3,00 o kilo")
            break
        default:
            console.log("Fruta não encontrada")
    }
}

fruta("melancia")
fruta("kiwi")
fruta("maçã")
fruta("morango")