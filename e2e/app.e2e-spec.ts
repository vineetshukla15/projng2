import { Ng4projPage } from './app.po';

describe('ng4proj App', () => {
  let page: Ng4projPage;

  beforeEach(() => {
    page = new Ng4projPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
