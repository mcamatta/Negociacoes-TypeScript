export abstract class View<T>{//faz com que a classe filha tenha que definir o T

    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    public update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}