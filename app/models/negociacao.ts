
export class Negociacao {
    constructor(
        private _data: Date, 
        private readonly _quantidade: number, /* Apenas leitura */
        private readonly _valor: number
    ){}

    get data(): Date{
        const data = new Date(this._data.getTime()); // programação defensiva
        return this._data;
    }

    get volume(): number{
        return this._quantidade * this._valor;
    }
}