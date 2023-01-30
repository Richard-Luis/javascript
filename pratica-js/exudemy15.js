function comprarCarro(carros){
    switch(carros) {
        case "Hatch":
        console.log("Compra efetuada com sucesso")
        break
        case "Sedan": 
        case "motocicletas": 
        case "caminhote":
        console.log("Tem certeza que quer escolher esse modelo ?")
        break
        default:
        console.log("Não trabalhamos com esse modelo")
    }
}

comprarCarro("Sedan")

//Tbm posso usar o return ao invés de console.log