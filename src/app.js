import initialPage from './initial_page';
import projectModel from './models/project';
import todoModel from './models/todo';
import './style.css';


export default () => {
    

    todoModel.addTodo({
        title: 'Title A',
        dueDate: '18-12-1992',
        description: 'This is a description about this post!',
        priority: 'normal',
        project: 'Default'
    })

    initialPage();
    // const deleteButtons = document.querySelectorAll('.delete-task');
    // for (let btn of deleteButtons) {
    //     btn.addEventListener('click', (e) => {
            
    //     });
    // }


};
