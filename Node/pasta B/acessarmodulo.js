const moduleA = require('../moduleA')
console.log(moduleA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('../pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    req.write('Bom dia!')
    res.end()
}).listen(8080)