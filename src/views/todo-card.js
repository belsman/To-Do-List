export default ({title, description, dueDate, priority, id}) => `<div class="task d-flex p-2 mb-1 border">
    <div class="title ml-3">
        <span class="edit-task" data-id="${id}"><i class="fa fa-pencil" aria-hidden="true"></i></span>
        <h5>${title}</h5>
        <p>${description}</p>
        <span class="due-date font-italic">${dueDate}</span><br>
        <span class="priority font-italic text-danger">${priority}</span>
    </div>
    <span class="delete-task text-danger ml-auto align-self-end" data-id="${id}"><i class="fa fa-trash" aria-hidden="true"></i></span>
</div>`;
