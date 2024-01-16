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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);