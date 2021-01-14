class Todo {
  constructor(title, description, project, priority, dueDate) {
    this.title = title;
    this.project = project;
    this.description = description;
    this.priority = this.getPriorityLabel(priority);
    this.dueDate = dueDate;
  }

  getPriorityLabel(idx) {
    return ['Normal', 'Urgent', 'Critical'][idx];
  }
}

export default Todo;
