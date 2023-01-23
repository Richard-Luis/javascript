(function(){
    console.log(`Sera executado na hora!`)
    console.log(`Foge do escopo mais abrngente!`)

    //testei e funcionou
    function fora() {
        const x = 'Local'
        function dentro() {
            return x 
        }
        return dentro
    }
})()