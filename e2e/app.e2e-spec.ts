import { NewsBoardPage } from './app.po';

describe('news-board App', () => {
  let page: NewsBoardPage;

  beforeEach(() => {
    page = new NewsBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
