import projectModel from '../models/project';
import todoModel from '../models/todo';
import createTodoFormView from '../views/create-todo-view';
import alerTemplate from '../views/todo-flash-message';


export default e => {
    const projects = projectModel.fetchProjects();
    const todoIndex = e.target.parentElement.dataset.id;
    const todo = todoModel.fetchTodos()[todoIndex];

    const rightCol = document.querySelector('div.col-sm-9');
    rightCol.innerHTML = '';
    rightCol.innerHTML = createTodoFormView(projects, todo);

    const { createTodoForm } = document;
    createTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const { title, description, project, priority, dueDate } = e.target.elements;
        todo.title = title.value;
        todo.description = description.value;
        todo.priority = ['Normal', 'Urgent', 'Critical'][priority.value];
        todo.dueDate = dueDate.value;
        todo.project = project.value;

        todoModel.update();
        const addFormWrapper = document.querySelector('div#add-task');
        addFormWrapper.insertAdjacentHTML('afterbegin', alerTemplate());
    });
}
