export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw Error("Método precisa ser implementado");
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
