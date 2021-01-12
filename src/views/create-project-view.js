export default () => `
<div id="add-project" class="p-3 border">
    <form action="" name="createProjectForm">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required class="form-control">
        </div>

        <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" id="description" class="form-control" rows="3"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Create Project</button>
</form>
</div>`;
