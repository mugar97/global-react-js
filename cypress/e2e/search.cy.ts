describe('Search bar', () => {
  it('search a term prints it to the console', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });

    cy.get('#searchForm > input').clear().type('e2e test{enter}');

    cy.get('@consoleLog').should('be.calledWith', 'search callback: e2e test');
  });
});
