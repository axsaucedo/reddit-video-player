import { browser, by, element } from 'protractor';

describe('Reddit Video Home page', () => {
    beforeAll(done => {
        browser.get('/')
        .then(done);
    });

    it('should have image', () => {
        expect(true).toBeTruthy();
    });
});
