export default (projects) => `<div id="add-task" class="p-3 border">
    <form name="createTodoForm">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" name="title" required class="form-control">
        </div>

        <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" id="description" class="form-control" rows="3"></textarea>
        </div>

        <div class="form-group">
            <label for="project">Project: </label>
            <select name="project" id="project" class="form-control">
                ${ projects.map((proj => `<option value="${ proj.name }">${ proj.name }</option>`)).join('') }
            </select>
        </div>
        
        <div class="form-group">
            <label for="priority">Priority: </label>
            <select name="priority" id="priority" class="form-control">
                <option value="1">Normal</option>
                <option value="2">Urgent</option>
                <option value="3">Critical</option>
            </select>
        </div>

        <button class="btn btn-primary">Create Task</button>
    </form>
</div>`;
