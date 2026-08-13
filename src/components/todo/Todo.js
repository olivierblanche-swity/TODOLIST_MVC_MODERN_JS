import getTemplate from "./template";
import DB from '../../DB';

export default class Todo {
    constructor(data, onUpdate = () => {}, onDelete = () => {}) {
        this.id = data.id;
        this.content = data.content;
        this.completed = data.completed;
        this.createdAt = data.createdAt;
        this.domElt = null;
        this.onUpdate = onUpdate;
        this.onDelete = onDelete;
    }
    render(el){
        const template = document.createElement('template');
        template.innerHTML = getTemplate(this);
        this.domElt = template.content.firstElementChild;
        this.initEvents();
        el.append(this.domElt);
    }

    async toggleCompleted() {
        // modif tableau
        this.completed = ! this.completed;

        // modif DOM

        this.domElt.classList.toggle('completed');

        // modif DB
        const todo = await DB.updateOne(this);
        this.onUpdate();
        return todo;
    }

    async update(data){
        if (!data.trim()) return;

        this.content = data;
        this.domElt.querySelector('label').innerText = this.content;
        this.domElt.classList.remove("editing");
        return await DB.updateOne(this);

    }

    initEvents() {
        this.domElt.querySelector('.toggle').addEventListener('change', (e)=>{
            this.toggleCompleted();
        });

        this.domElt.querySelector('.destroy').addEventListener('click', (e) => {
            this.onDelete(this.id);
        });

        this.domElt.querySelector("label").addEventListener('dblclick', (e) => {
            this.domElt.classList.add("editing");
        });

        this.domElt.querySelector(".edit").addEventListener('change', (e) => {
            this.update(e.target.value);
        });
    }
}
