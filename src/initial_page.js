import navbar from './views/nav';
import leftCol from './views/left-col';
import rightCol from './views/right-col';

export default () => {
    const root = document.getElementById('content');
    root.insertAdjacentHTML( 'beforeend', navbar());
    root.insertAdjacentHTML('beforeend', leftCol('data'));
    root.insertAdjacentHTML('beforeend', rightCol('data'));
};
