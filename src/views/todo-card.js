export default ({title, description, dueDate, priority}) => `<div class="task d-flex p-2 mb-1 border">
    <div class="title ml-3">
        <h5>${title}</h5>
        <p>${description}</p>
        <span class="due-date font-italic">${dueDate}</span><br>
        <span class="priority font-italic text-danger">${priority}</span>
    </div>
    <span class="delete-task text-danger ml-auto align-self-end"><i class="fa fa-trash" aria-hidden="true"></i></span>
</div>`;
