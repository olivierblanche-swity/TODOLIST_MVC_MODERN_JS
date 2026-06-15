import getTemplate from "./template";

export default class Todo {
    constructor(data) {
        this.id = data.id;
        this.content = data.content;
        this.completed = data.completed;
        this.createdAt = data.createdAt;
    }
    render(el){
        const template = document.createElement('div');
        template.innerHTML = getTemplate(this);
        el.append(template);
    }
}