const pessoal = {
    nome: 'Morgana',
    sobrenome: 'Schneider',
    idade: 25,

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


