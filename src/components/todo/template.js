import './styles.css';


export default function getTemplate(todo){
    return `
        <li>${todo.content}</li>
        `;
}