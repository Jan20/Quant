import { AlfheimPage } from './app.po';

describe('alfheim App', () => {
  let page: AlfheimPage;

  beforeEach(() => {
    page = new AlfheimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
