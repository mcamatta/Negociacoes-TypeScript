import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = []; //generic :) / Negociacao[]

    public adiciona(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao>{ //retorna apenas para a leitura / readonly Negociacao[]
        return this.negociacoes;
    }
}