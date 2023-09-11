// com promise...
const http = require('http');
const { isAsyncFunction } = require('util/types');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res =>{
            let resultado = ''
    
            res.on('data', dados =>{
                resultado += dados
            })
            res.on('end', () => {
               try{
                resolve(JSON.parse(resultado))
               } catch(e){
                reject(e)
               }
            })
        })
    })
}

// Recurso do ES8
// Objetivo de simplificar o uso de promise...

let obterAlunos = async () =>{
    const TurmaA = await getTurma('A')
    const TurmaB = await getTurma('B')
    const TurmaC = await getTurma('C')
    return [].concat(TurmaA, TurmaB, TurmaC)
    // retorna um Objeto AsyncFunction
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))