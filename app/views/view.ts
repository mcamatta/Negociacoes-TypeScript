export abstract class View<T>{//faz com que a classe filha tenha que definir o T

    protected elemento: HTMLElement;

    constructor(seletor: string){
        const elemento = document.querySelector(seletor); 
        if(elemento){
            this.elemento = elemento as HTMLElement;
        } else{
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
        }
    }

    public update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}