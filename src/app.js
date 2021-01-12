import initialPage from './initial_page';
import projectModel from './models/project';
import todoModel from './models/todo';
import './style.css';


export default () => {
    initialPage();

    const deleteButtons = document.querySelectorAll('.delete-task');
    for (let btn of deleteButtons) {
        btn.addEventListener('click', (e) => {
            
        });
    }
};
