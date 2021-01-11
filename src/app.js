import initialPage from './initial_page';
import './style.css';


export default () => {
    initialPage();

    const deleteButtons = document.querySelectorAll('.delete-task');
    for (let btn of deleteButtons) {
        btn.addEventListener('click', (e) => alert('DELETE!'));
    }

    const checkButtons = document.querySelectorAll('.check-form');
    for (let chkBtn of checkButtons) {
        chkBtn.addEventListener('input', (e) => alert(e.target.value));
    }
};
