import './styles.css';

export default function getTemplate(){
    return `
        <section class="todoapp">
            <header class="header">
                <h1>todos</h1>
                <input class="new-todo" placeholder="What needs to be done?" autofocus />
            </header>
            <main class="main">
                <div class="toggle-all-container">
                    <input class="toggle-all" type="checkbox" />
                    <label class="toggle-all-label" for="toggle-all">Mark all as complete</label>
                </div>
                <ul class="todo-list">
                    

                </ul>
            </main>
            <footer class="footer">
                <span class="todo-count"><strong></strong> item(s) left</span>
                <ul class="filters">
                    <li>
                        <a href="#/" class="selected">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button class="clear-completed">Clear completed</button>
            </footer>
        </section>
        <footer class="info">
			<p>Double-click to edit a todo</p>
			<p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
			<p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
            <p>Maintenanced by the TodoMVC team</p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
        `;
}