const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    
};

//cliente.enderecos = [{
//rua: "R. joseph Climber",
//numero: 1337,
//apartamento: true,
//complemento: "ap 934",
//}
//];
const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes('enderecos')){
console.error("erro. É necessário ter um endereço cadastrado");
}