const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
// removendoa as duplicatas
const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

//forma mais simplifacada de escrever  o código acima
//const nomesAtualizados = [...new setInterval(nomes)];

console.log(nomesAtualizados);