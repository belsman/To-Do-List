import todoModel from './models/todo';
import projectModel from './models/project';
import navbar from './views/nav';
import leftColView from './views/left-col';
import rightColView from './views/right-col';
import projectCard from './views/project-card';
import todoCard from './views/todo-card';


export default () => {
    const root = document.getElementById('content');
    // create skeleton
    root.insertAdjacentHTML('beforeend', navbar());
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row');

    rowContainer.insertAdjacentHTML('beforeend', leftColView());
    rowContainer.insertAdjacentHTML('beforeend', rightColView());
    root.appendChild(rowContainer);
    
    // fetch models
    const projects = projectModel.fetchProjects();
    if (projects.length === 0) {
        projectModel.createProject({
            name: 'default',
            description: 'initial default project',
            date: Date.now()
        })
    }

    const defaultTodos = todoModel.fetchTodos().filter( todo => todo && (todo.project === 'default') );
    
    // display index views
    const projectListElement = document.getElementById('projects-view');
    const todoListElement = document.getElementById('todo-list-view');

    projects.forEach((project) => {
        projectListElement.insertAdjacentHTML('beforeend', projectCard(project)) ;
    });

    defaultTodos.forEach((todo) => {
        todoListElement.insertAdjacentHTML('beforeend', todoCard(todo));
    });
};
