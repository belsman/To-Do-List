export default {
  todoLists: JSON.parse(localStorage.getItem('todoStorage')) || [],
  fetchTodos(idx) {
    if (idx) return this.todoLists[idx];
    return this.todoLists;
  },
  addTodo(obj) {
    obj.id = this.getId();
    this.todoLists.push(obj);
    localStorage.setItem('todoStorage', JSON.stringify(this.todoLists));
    return this;
  },
  getId() {
    const list = JSON.parse(localStorage.getItem('todoStorage')) || [];
    return list.length;
  },
  update() {
    localStorage.setItem('todoStorage', JSON.stringify(this.todoLists));
  },
  setTodoNull(idx) {
    this.todoLists[idx] = null;
  },
};
