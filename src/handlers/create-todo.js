import todoModel from '../models/todo';
import projectModel from '../models/project';
import createTodoFormView from '../views/create-todo-view';
import alerTemplate from '../views/todo-flash-message';
import projectTodoContentHandler from './project-todo-tabcontent';
import Todo from '../constructors/todo-constructor';

export default e => {
  e.preventDefault();
  const listMenu = document.querySelectorAll('li.list-group-item');
  listMenu.forEach(li => li.classList.remove('active'));

  const projects = projectModel.fetchProjects();
  const rightCol = document.querySelector('div.col-sm-9');
  rightCol.innerHTML = createTodoFormView(projects);

  const { createTodoForm } = document;
  createTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const {
      title, description, project, priority, dueDate,
    } = e.target.elements;
    const todo = new Todo(title.value, description.value,
      project.value, priority.value, dueDate.value);

    todoModel.addTodo(todo);
    const addFormWrapper = document.querySelector('div#add-task');
    addFormWrapper.insertAdjacentHTML('afterbegin', alerTemplate());
    createTodoForm.reset();
  });

  const projectMenuButtons = document.querySelectorAll('li.list-group-item');
  projectMenuButtons.forEach(menu => {
    menu.addEventListener('click', projectTodoContentHandler);
  });
};
