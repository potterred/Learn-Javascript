const pessoal = {
    nome: 'Morgana',
    sobrenome:'Schneider',
    idade:29,


fala () {
    console.log(`A minha idade atual é ${this.idade}.`);
},

incrementaIdade() {
    ++this.idade;
}
};

pessoal.fala();
pessoal.incrementaIdade();