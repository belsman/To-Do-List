export default {
  projectLists: JSON.parse(localStorage.getItem('projectStorage')) || [],
  fetchProjects() {
    return this.projectLists;
  },
  addProject(obj) {
    this.projectLists.push(obj);
    localStorage.setItem('projectStorage', JSON.stringify(this.projectLists));
    return this;
  },
};
