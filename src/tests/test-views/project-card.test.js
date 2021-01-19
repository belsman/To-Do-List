import projectCard from '../../views/project-card';

describe('Test the Project Card View function', () => {
  const project = { name: 'project #1', description: 'A basic test for views' };
  const projectView = projectCard(project);

  it('project-card contains data-menu attribute', () => {
    const dataAttribute = 'data-menu';
    expect(projectView).toMatch(dataAttribute);
  });

  it('project-card contains data-menu attribute equal to project #1', () => {
    const dataAttribute = `data-menu="${project.name}"`;
    expect(projectView).toMatch(dataAttribute);
  });

  it('project-card has required css classes', () => {
    const cssAttribute = 'list-group-item project-menu';
    expect(projectView).toMatch(cssAttribute);
  });
});