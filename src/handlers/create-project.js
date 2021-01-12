import createProjectFormView from '../views/create-project-view';
import projectCard from '../views/project-card';
import projectModel from '../models/project';

export default e => {
    const rightCol = document.querySelector('div.col-sm-9');
    rightCol.innerHTML = '';
    rightCol.innerHTML = createProjectFormView();

    createProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const [name, description] = e.target.elements;
        const project = {name: name.value, description: description.value, createdAt: Date.now()};
    
        projectModel.addProject(project);
        const projectView = document.querySelector('ul#projects-view');
        projectView.insertAdjacentHTML('beforeend', projectCard(project));
        createProjectForm.reset();
    });
};