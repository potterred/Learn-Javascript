const nome = 'Morgana';
const sobrenome = 'Schneider';
const idade = 30;
const peso = 63;
const alturaemM = 1.62;
let imc; // peso / (altura * altura);
let anoNascimento;

indiceMassaCorporal = peso / (alturaemM * alturaemM);
anoNascimento = 2025 - idade;

// +
console.log(nome + '' + sobrenome +'tem',idade,'anos','pesa', peso, 'kg');
console.log(`tem ${alturaemM} de altura  e seu imc é ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);