import initialPage from './initial_page';
import projectModel from './models/project';
import todoModel from './models/todo';
import createProjectFormView from './views/create-project-view';
import projectCard from './views/project-card';
import './style.css';

export default () => {
    initialPage();

    // Create Project
    const createBtn = document.querySelector('button#create-btn');
    createBtn.addEventListener('click', (e) => {
        const rightCol = document.querySelector('div.col-sm-9');
        rightCol.innerHTML = '';
        rightCol.innerHTML = createProjectFormView();

        const { createProjectForm } = document;
        createProjectForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const [name, description] = e.target.elements;
            const project = {name: name.value, description: description.value, createdAt: Date.now()};

            projectModel.addProject(project);
            const projectView = document.querySelector('ul#projects-view');
            projectView.insertAdjacentHTML('beforeend', projectCard(project));
            createProjectForm.reset();
        });
    });

    const deleteButtons = document.querySelectorAll('.delete-task');
    for (let btn of deleteButtons) {
        btn.addEventListener('click', (e) => {
            
        });
    }
};
