import todoModel from '../models/todo';
import todoCard from '../views/todo-card';
import editTodoHandler from '../handlers/todo-detail';
import deleteTodoHandler from '../handlers/delete-todo';


export default e => {
    const selectedProject = e.target.dataset.menu;
    const todos = todoModel.fetchTodos().filter( t => t && (t.project === selectedProject));
    const rightCol = document.querySelector('div.col-sm-9');
    rightCol.innerHTML = '';
    const todosWrapper = document.createElement('div');
    todosWrapper.id = 'todo-list-view';
    todosWrapper.innerHTML = todos.map(t => todoCard(t)).join('');
    rightCol.appendChild(todosWrapper);
    const editTodoButtons = document.querySelectorAll('span.edit-task');

    for (let editBtn of editTodoButtons) {
        editBtn.addEventListener('click', editTodoHandler);
    }

    const deleteButtons = document.querySelectorAll('.delete-task');
    for (let btn of deleteButtons) {
        btn.addEventListener('click', deleteTodoHandler);
    }
};
