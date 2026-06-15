import DB from '../../DB';
import Todo from '../todo/Todo';
import getTemplate from './template';


export default class TodoList{
    constructor(data){
        this.domElt = document.querySelector(data.el);
        DB.setApiURL(data.apiURL);
        this.todos= [];
        this.loadTodos();
    }
    async loadTodos(){
        const todos = await DB.findALL();
        this.todos = todos.map(todo => new Todo(todo));
        this.render();
    }
    render(){
        this.domElt.innerHTML = getTemplate();
        this.todos.forEach(todo => todo.render(this.domElt.querySelector(".todo-list")));
    }
}