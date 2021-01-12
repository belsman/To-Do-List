export default {
    todoLists: JSON.parse(localStorage.getItem('todoStorage')) || [],
    fetchTodos() {
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
        return list.length > 0 ? list[list.length - 1].id + 1 : 0;
    }
}
