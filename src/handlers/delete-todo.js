import todoModel from '../models/todo';

export default e => {
  const todoIndex = e.target.parentElement.dataset.id;
  const taskWrapper = e.target.parentElement.parentElement;
  taskWrapper.remove();
  todoModel.setTodoNull(todoIndex);
  todoModel.update();
};
