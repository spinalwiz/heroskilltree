import { HeroskilltreePage } from './app.po';

describe('heroskilltree App', function() {
  let page: HeroskilltreePage;

  beforeEach(() => {
    page = new HeroskilltreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
