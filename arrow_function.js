function apresentar(nome){
    return`meu nome é ${nome}`;
}

//arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1,num2) => num1 + num2;

//arrow function com + de uma linha de instrução
// operador maior ou igual >=
const somaNumerosPequenos = (num1,num2) => {
    if(num1 >10 || mum2 > 10){
        return 'somente numeros de 1 a 9 '
    } else{
        return mum1 + num2;
    }
}