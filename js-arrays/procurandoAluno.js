const alunos = ['joao','juliana','ana', 'caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    //includes confere se esta na lista
if(listaDeAlunosEMedias[0].includes(aluno)){
   // const alunos = listaDeAlunosEMedias[0];
    //const medias = listaDeAlunosEMedias[1];
    // indexof retorna o indice
    // codigo abaixo simplifica e une as duas const acima
    const [alunos, medias] = listaDeAlunosEMedias;
    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];
    
    console.log(`${aluno} tem a media ${mediaDoAluno}`);
} else {
console.log("aluno não encontrado");
}
}

exibeNomeENota('ana');