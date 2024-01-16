const cliente ={
    nome: "andre",
    idade: 32,
    cpf: "11223344",
    email:"andre@dominio.com",
    };
    
    
    console.log(`o nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

    const chaves = ["nome","idade","cpf","email", "altura"];

    chaves.forEach ((chave) =>{
        console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
    })

    