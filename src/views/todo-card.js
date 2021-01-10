export default () => `<div class="task d-flex p-2 mb-1 border">
    <input type="checkbox" name="complete-task" id="" class="align-self-center">
    <div class="title ml-3">
        <h5>Complete the HTML pages of the TODO APP</h5>
        <span class="due-date font-italic">Today</span><br>
        <span class="priority font-italic text-danger">Critical</span>
    </div>
    <span class="delete-task text-danger ml-auto align-self-end"><i class="fa fa-trash" aria-hidden="true"></i></span>
</div>`;
