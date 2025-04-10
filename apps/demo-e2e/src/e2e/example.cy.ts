describe('example', () => {
  it('should have welcome message', () => {
    cy.visit('/');
    cy.wait(1000 * Math.random());
    cy.get('h1').should('contain', 'Welcome');
  });
});
