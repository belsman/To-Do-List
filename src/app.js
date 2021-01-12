import initialPage from './initial_page';
import todoModel from './models/todo';
import createProjectHandler from './handlers/create-project';
import './style.css';

export default () => {
    initialPage();

    // Create Project
    const createProjectBtn = document.querySelector('button#create-btn');
    createProjectBtn.addEventListener('click', createProjectHandler);

    const deleteButtons = document.querySelectorAll('.delete-task');
    for (let btn of deleteButtons) {
        btn.addEventListener('click', (e) => {
            
        });
    }
};
