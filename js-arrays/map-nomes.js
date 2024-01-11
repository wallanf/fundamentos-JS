const nomes = ['ana Julia', 'Caio vinicuis','BIA silva'];

//const nomesPadronizados = nomes.map((nome) => {
 
  // return nome.toLocaleUpperCase();

//});
// outra maneira de escrever uma arrowfunction
const nomesPadronizados = nomes.map((nome) => nome.toLocaleUpperCase());

console.log(nomesPadronizados);