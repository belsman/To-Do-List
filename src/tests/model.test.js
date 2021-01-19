import Todo from '../models/todo';

const localstorage = {
  storage: {},
  getItem(key) {
    return this.storage[key] ? this.storage[key] : null;
  },
  setItem(key, value) {
    this.storage[key] = value;
  },
  removeItem(key) {
    delete this.storage[key];
  },
};

describe('Test Todo models using mocks', () => {
  it('calling fetchTodos on an empty Todo storage return an empty array', () => {
    const result = Todo.fetchTodos();
    expect(result.length).toBe(0);
  });

  it('addTodos and call fetchTodos', () => {
    Todo.addTodo({
      title: 'TITLE #1', description: 'description 1', project: 'default', dueDate: '2100-01-04',
    });
    Todo.addTodo({
      title: 'TITLE #2', description: 'description 2', project: 'default', dueDate: '2100-01-05',
    });
    const result = Todo.fetchTodos();
    localstorage.removeItem('todoStorage');
    expect(result.length).toBe(2);
  });
});
