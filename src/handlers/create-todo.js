import todoModel from '../models/todo';
import projectModel from '../models/project';
import createTodoFormView from '../views/create-todo-view';
import alerTemplate from '../views/todo-flash-message';


export default e => {
    const projects = projectModel.fetchProjects();
    const rightCol = document.querySelector('div.col-sm-9');
    
    rightCol.innerHTML = '';
    rightCol.innerHTML = createTodoFormView(projects);

    const { createTodoForm } = document;
    createTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const [title, description, project, priority] = e.target.elements;
        const todo = {title: title.value, 
            description: description.value,
            project: project.value,
            priority: priority.value
        };
        
        todoModel.addTodo(todo);
        const addFormWrapper = document.querySelector('div#add-task');
        addFormWrapper.insertAdjacentHTML('afterbegin', alerTemplate());
        createTodoForm.reset();
    });
};
