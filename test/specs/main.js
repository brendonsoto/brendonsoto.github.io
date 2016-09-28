describe('my portfolio site - general', function() {
  it('should have my name as the title', function() {
    browser.url('/');
    browser.getTitle().should.be.equal('Brendon Soto');
  });
});
