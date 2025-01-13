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

// Nan - not a number parseInt (inteiro), parseFloat (decimais)

const num1 = 10;
const num2 = number('Morgana');
console.log(num1+ num2);
console.log(typeof num2);