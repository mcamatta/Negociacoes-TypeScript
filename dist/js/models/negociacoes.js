export class Negociacoes {
    constructor() {
        this.negociacoes = []; //generic :) / Negociacao[]
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
