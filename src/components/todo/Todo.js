import getTemplate from "./template";

export default class Todo {
    constructor(data) {
        this.id = data.id;
        this.content = data.content;
        this.completed = data.completed;
        this.createdAt = data.createdAt;
        this.domElt = null;
    }
    render(el){
        const template = document.createElement('template');
        template.innerHTML = getTemplate(this);
        this.domElt = template.content.firstElementChild
        el.append(this.domElt);
    }
}