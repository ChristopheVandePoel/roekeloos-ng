import { RoekeloosPage } from './app.po';

describe('roekeloos App', () => {
  let page: RoekeloosPage;

  beforeEach(() => {
    page = new RoekeloosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
