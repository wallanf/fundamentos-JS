const cliente ={
nome: "andre",
idade: 32,
cpf: "11223344",
email:"andre@dominio.com",
}


console.log(`o nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`o 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
