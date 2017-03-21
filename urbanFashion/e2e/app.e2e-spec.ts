import { UrbanFashionPage } from './app.po';

describe('urban-fashion App', () => {
  let page: UrbanFashionPage;

  beforeEach(() => {
    page = new UrbanFashionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
