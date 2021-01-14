export default (projects, option) => `<div id="add-task" class="p-3 border">
    <form name="createTodoForm">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" required class="form-control" value="${option ? option.title : ''}">
        </div>

        <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" id="description" class="form-control" rows="3">${option ? option.description : ''}</textarea>
        </div>

        <div class="form-group">
            <label for="dueDate">Due Date</label>
            <input type="date" id="dueDate" class="form-control" name="dueDate" value="${option ? option.dueDate : ''}" required>
        </div>

        <div class="form-group">
            <label for="project">Project: </label>
            <select name="project" id="project" class="form-control">
                ${projects.map((proj => `<option value="${proj.name}" ${(option && (proj.name === option.project)) ? 'selected' : ''}>${proj.name}</option>`)).join('')}
            </select>
        </div>
        
        <div class="form-group">
            <label for="priority">Priority: </label>
            <select name="priority" id="priority" class="form-control">
                <option value="0" ${option && option.priority === '0' ? 'selected' : ''}>Normal</option>
                <option value="1" ${option && option.priority === '1' ? 'selected' : ''}>Urgent</option>
                <option value="2" ${option && option.priority === '2' ? 'selected' : ''}>Critical</option>
            </select>
        </div>

        <button class="btn btn-primary">Create Task</button>
    </form>
</div>`;
