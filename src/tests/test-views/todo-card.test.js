import todoCardView from '../../views/todo-card';
import Todo from '../../constructors/todo-constructor';

describe('Test the todoCard View function', () => {
  const todo = new Todo('title', 'this is a short description', 'default', 1, '2100-01-05');
  const todoCard = todoCardView(todo);

  it('todo card contains title of the todo', () => {
    expect(todoCard).toMatch(todo.title);
  });

  it('todo card contains priority of the todo as urgent', () => {
    expect(todoCard).toMatch('Urgent');
  });

  it('todo card contains description of the todo', () => {
    expect(todoCard).toMatch(todo.description);
  });
});
