describe('AddressForm Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('accepts input', () => {
    const address = 'www.wp.pl';

    cy.get('#address')
      .type(address)
      .should('have.value', address);
  });

  context('Form submission', () => {
    it('Adds a new IP Locator card data', () => {
      const address = 'www.wp.pl';

      cy.get('#address')
        .type(address)
        .should('have.value', address);

      cy.get('#calculate-btn').click();
      cy.get('#address').should('have.value', '');

      cy.get("[data-test='address']").should('contain', 'address: www.wp.pl');
      cy.get("[data-test='ip']").should('contain', 'ip: 212.77.98.9');
      cy.get("[data-test='country']").should('contain', 'country: Poland');
      cy.get("[data-test='region']").should('contain', 'region: Pomerania');
      cy.get("[data-test='city']").should('contain', 'city: Sopot');
      cy.get("[data-test='latitude']").should('contain', 'latitude: 54.31930923461914');
      cy.get("[data-test='longitude']").should('contain', 'longitude: 18.63736915588379');
    });
  });
});
