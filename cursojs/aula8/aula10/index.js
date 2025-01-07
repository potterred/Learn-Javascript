// String, number, undefined, null, boolean, symbol

const nome = 'Morgana';  // string
const sobrenome ='Schneider';  // string
const primeironumero ='10'; // number
const segundonumero ='10.52'; //number
let nomealuno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomealuno = null; // Nulo -> não aponta pra local nenhuma na memoria
const aprovado = false; // Boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a =3;
console.log(a,b) // 3, 2