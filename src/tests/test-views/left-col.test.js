import leftCol from '../../views/left-col';

describe('Test for the Left column', () => {
  const leftColView = leftCol();

  it('left column should contain `ul for listing projects`', () => {
    const ul = '<ul id="projects-view" class="list-group mb-1"></ul>';
    expect(leftColView).toMatch(ul);
  });

  it('left column should contain `button to add project`', () => {
    const addProjectButtonElement = '<button id="create-btn" class="btn btn-primary w-100 text-center">Create Project</button>';
    expect(leftColView).toMatch(addProjectButtonElement);
  });
});