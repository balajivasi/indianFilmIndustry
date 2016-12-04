import { IndianFilmIndustryPage } from './app.po';

describe('indian-film-industry App', function() {
  let page: IndianFilmIndustryPage;

  beforeEach(() => {
    page = new IndianFilmIndustryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
