import { MdEditorPage } from './app.po';

describe('md-editor App', () => {
  let page: MdEditorPage;

  beforeEach(() => {
    page = new MdEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
