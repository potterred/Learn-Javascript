/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (biginit, symbol) - Valores copiados

Referência (mútavel) - array, object, function - Passados  por referência
*/
const  a = {
    nome:'Morgana',
    sobrenoem:'Schneider'
};
const b = a;


b.nome = 'João';
console.log(a);
console.log(b);