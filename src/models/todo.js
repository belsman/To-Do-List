export default {
    todoLists: JSON.parse(localStorage.getItem('todoStorage')) || [],
    fetchTodos() {
        return this.todoLists;
    },
    addTodo(obj) {
      this.todoLists.push(obj);
      localStorage.setItem('todoStorage', JSON.stringify(this.todoLists));
      return this;
    }
}
