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
  projectMenuButtons.forEach(menu => {
    menu.addEventListener('click', projectTodoContentHandler);
  });

  // Create Project
  const createProjectBtn = document.querySelector('button#create-btn');
  createProjectBtn.addEventListener('click', createProjectHandler);

  // Create Todo
  const addTodoBtns = document.querySelectorAll('.add-todo');
  addTodoBtns.forEach(addTodo => addTodo.addEventListener('click', createTodoHandler));

  const editTodoButtons = document.querySelectorAll('span.edit-task');
  editTodoButtons.forEach(editBtn => editBtn.addEventListener('click', editTodoHandler));

  const deleteButtons = document.querySelectorAll('.delete-task');
  deleteButtons.forEach(btn => btn.addEventListener('click', deleteTodoHandler));
};
