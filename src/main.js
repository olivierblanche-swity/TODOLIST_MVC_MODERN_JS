import './styles.css';
import TodoList from "./components/todoList/TodoList";

new TodoList ({
    el:"#app",
    apiURL: "https://6a1dbd99bcc4f20d5ca510f1.mockapi.io/",
});