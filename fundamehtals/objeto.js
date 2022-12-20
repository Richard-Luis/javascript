const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.price = 4998.90;
prod1['Desconto Legal'] = 0.40; //evitar atributos com espaços

console.log(prod1);

console.log(prod1.price * prod1['Desconto Legal']);

const prod2 = {
    
    nome: 'Camisa Polo', 
    preço: 79.90,
 };

console.log(prod2);