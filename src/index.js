import model from './models/todo';

const todo = {
    title: 'Implement the CSS',
    description: 'The implement the css of the CSS DESCRIPTION',
    dueDate: '07-12-2019',
    priority: 3,
    completed: true,
    projects: 'project B'
}
console.log(model.addTodo(todo));
console.log(model.fetchTodos());