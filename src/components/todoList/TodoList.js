import DB from '../../DB';
import Todo from '../todo/Todo';
import getTemplate from './template';


export default class TodoList{
    constructor(data){
        this.domElt = document.querySelector(data.el);
        this.listDomElt = null;
        DB.setApiURL(data.apiURL);
        this.todos= [];
        this.loadTodos();
    }
    async loadTodos(){
        const todos = await DB.findALL();
        this.todos = todos.map(todo => new Todo(todo, () => this.renderItemsLeftCount()));
        this.render();
    }

    getItemsLeftCount() {
        return this.todos.filter((todo) => !todo.completed).length;
    }

    renderItemsLeftCount(){
        this.domElt.querySelector(".todo-count strong").innerText = 
            this.getItemsLeftCount();
    }
    render(){
        this.domElt.innerHTML = getTemplate();
        this.listDomElt = this.domElt.querySelector(".todo-list");
        this.todos.forEach(todo => todo.render(this.listDomElt));
        this.renderItemsLeftCount();
        this.initEvents();
    }
    async addTodo(data) {
        if (!data.trim()) return;

        // ajout DB 
        const todo = await DB.create(data);

        // ajout a this.todo
        const newTodo = new Todo(todo, () => this.renderItemsLeftCount());
        this.todos.push(newTodo);

        // ajout dans le dom 
        newTodo.render(this.listDomElt);

        // relancer le renderItemsLefCount
        this.renderItemsLeftCount();
    }

    initEvents (){
        this.domElt.querySelector('.new-todo').addEventListener("change", (e) => {
            this.addTodo(e.target.value);
            e.target.value = "";
        });
    }
}
