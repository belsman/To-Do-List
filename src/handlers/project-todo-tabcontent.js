import todoModel from '../models/todo';
import todoCard from '../views/todo-card';
import editTodoHandler from './todo-detail';
import deleteTodoHandler from './delete-todo';

export default e => {
  const listMenu = document.querySelectorAll('li.list-group-item');
  listMenu.forEach(li => li.classList.remove('active'));

  e.target.classList.add('active');
  const selectedProject = e.target.dataset.menu;
  const todos = todoModel.fetchTodos().filter(t => t && (t.project === selectedProject));
  const rightCol = document.querySelector('div.col-sm-9');
  rightCol.innerHTML = '';
  const todosWrapper = document.createElement('div');
  todosWrapper.id = 'todo-list-view';
  todosWrapper.innerHTML = todos.map(t => todoCard(t)).join('');
  rightCol.appendChild(todosWrapper);
  const editTodoButtons = document.querySelectorAll('span.edit-task');

  editTodoButtons.forEach(editBtn => editBtn.addEventListener('click', editTodoHandler));

  const deleteButtons = document.querySelectorAll('.delete-task');
  deleteButtons.forEach(btn => btn.addEventListener('click', deleteTodoHandler));
};
