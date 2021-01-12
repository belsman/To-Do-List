import initialPage from './initial_page';
import createProjectHandler from './handlers/create-project';
import createTodoHandler from './handlers/create-todo';
import './style.css';


export default () => {
    initialPage();

    // Create Project
    const createProjectBtn = document.querySelector('button#create-btn');
    createProjectBtn.addEventListener('click', createProjectHandler);

    // Create Todo
    const addTodoBtns = document.querySelectorAll('.add-todo');
    for (let addTodo of addTodoBtns) {
        addTodo.addEventListener('click', createTodoHandler);
    }

    const deleteButtons = document.querySelectorAll('.delete-task');
    for (let btn of deleteButtons) {
        btn.addEventListener('click', e => e);
    }
};
