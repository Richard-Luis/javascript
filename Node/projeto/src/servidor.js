const porta = 3003

const express = require('express')
const app = express()

//get é uma forma de requisição
app.get('/produtos', (req, res, next) =>{
    res.send({nome: 'Notebook', preco: 123.54}) // Converter para JSON
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`)
})