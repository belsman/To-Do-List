import nav from '../../views/nav';

describe('Test the navigation function', () => {
  it('The navigation has an `add-todo` link element', () => {
    const navigation = nav();
    const addTodoLink = '<a class="nav-link add-todo" href=""><i class="fa fa-plus"></i></a>';
    expect(navigation).toMatch(addTodoLink);
  });
});
