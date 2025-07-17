/*
Primitivos (imutáveis) String, number, boolean, undefined,
null (biginint, symbol) - Valores copiados

Referencia (mutável) - array, object, function - Passados por referência
*/
// 0123

const a = {
    nome: 'Morgana',
    sobrenome: 'Schneider'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);