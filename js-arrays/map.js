let notas = [10,9.5,8,7,6];
// metodo map
const notasAtualizadas = notas.map((nota)=>{
      return nota + 1 >= 10 ? 10 : nota + 1;
})
console.log(notasAtualizadas);

//metodo forEach abaixo
let notaAtualizada = [];
notas.forEach(function(nota){
    let notaAtualizada = nota + 1 >= 10 ? 10 : nota + 1 ;
    console.log(notaAtualizada);
})
