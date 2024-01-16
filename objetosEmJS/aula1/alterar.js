const pessoa = {
    nome:"luma",
    profissao:"engenheira",
};

console.log(pessoa.nome);
console.log(pessoa.telefone);

//adicionando propriedade no objeto
pessoa.telefone = "1122333444";

console.log(pessoa.telefone);

//alteran chave nome
pessoa.nome = 'luma silva';
console.log(pessoa);

// abaixo erro pq nao se pode reatribuir um objeto
//const novaPessoa = {
//nome:  "pedro",
//}

//pessoa = novaPessoa;