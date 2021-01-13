import todoModel from '../models/todo';
import todoCard from '../views/todo-card';

export default e => {
    const selectedProject = e.target.dataset.menu;
    const todos = todoModel.fetchTodos().filter( t => t.project === selectedProject);
    const rightCol = document.querySelector('div.col-sm-9');
    rightCol.innerHTML = '';
    const todosWrapper = document.createElement('div');
    todosWrapper.id = 'todo-list-view';
    todosWrapper.innerHTML = todos.map(t => todoCard(t)).join('');
    rightCol.appendChild(todosWrapper);
};
