import initialPage from './initial_page';
import createProjectHandler from './handlers/create-project';
import createTodoHandler from './handlers/create-todo';
import projectTodoContentHandler from './handlers/project-todo-tabcontent';
import editTodoHandler from './handlers/todo-detail';
import deleteTodoHandler from './handlers/delete-todo';
import './style.css';


export default () => {
    initialPage();

    // Project menu tab
    const projectMenuButtons = document.querySelectorAll('li.list-group-item');
    for (let menu of projectMenuButtons) {
        menu.addEventListener('click', projectTodoContentHandler);
    }

    // Create Project
    const createProjectBtn = document.querySelector('button#create-btn');
    createProjectBtn.addEventListener('click', createProjectHandler);

    // Create Todo
    const addTodoBtns = document.querySelectorAll('.add-todo');
    for (let addTodo of addTodoBtns) {
        addTodo.addEventListener('click', createTodoHandler);
    }

    const editTodoButtons = document.querySelectorAll('span.edit-task');
    for (let editBtn of editTodoButtons) {
        editBtn.addEventListener('click', editTodoHandler);
    }

    const deleteButtons = document.querySelectorAll('.delete-task');
    for (let btn of deleteButtons) {
        btn.addEventListener('click', deleteTodoHandler);
    }
};
