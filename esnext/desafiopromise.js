const fs = require('fs');
const path = require('path');

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            console.log('Depois de ler')
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt');

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo));
    // .then(conteudo => conteudo.split('\n'));
    // .then(linhas => linhas.join(','));
    // .then(conteudo => `O valor final é: ${conteudo}`);
    // .then(console.log)