const cliente = {
    nome: "joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    
};

cliente.enderecos = [{
rua: "R. joseph Climber",
numero: 1337,
apartamento: true,
complemento: "ap 934",
}
];

cliente.enderecos.push({
    rua: "R. joseph Landher",
    numero: 404,
    apartamento: false,
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);