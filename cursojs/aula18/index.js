const pessoal = {
    nome: 'Morgana',
    sobrenome: 'Schneider',
    idade: 29,

    fala () {
        console.log (`${this.nome}${this.sobrenome} está falando oi...`);
    },
incrementaIdade() {
    this.idade++;
}
};

pessoa1.fala();
pessoal.incrementaIdade();
pessoa1.fala();


