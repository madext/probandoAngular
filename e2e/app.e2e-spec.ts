import { EntesPage } from './app.po';

describe('entes App', function() {
  let page: EntesPage;

  beforeEach(() => {
    page = new EntesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
