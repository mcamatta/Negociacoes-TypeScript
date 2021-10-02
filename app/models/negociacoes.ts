import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = []; //generic :) / Negociacao[]

    adiciona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{ //retorna apenas para a leitura / readonly Negociacao[]
        return this.negociacoes;
    }
}