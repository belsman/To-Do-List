import todoModel from './models/todo';
import projectModel from './models/project';

const project = {
    projects: 'project B',
    description: 'this is project B',
}

projectModel.addProject(project);
console.log(projectModel.fetchProjects());
