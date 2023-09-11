describe("default language", () => {
  before(() => {
    // go to the Almosafer website
    cy.visit("https://www.almosafer.com/ar");
  });
  it(" default language ", () => {
    // language AR
    cy.get('.cta__saudi').click()
    cy.get('[data-testid="Header__LanguageSwitch"]')
      .should('include.text', "English");
  });
});
describe("default Currency", () => {
  before(() => {
    // go to the Almosafer website
    cy.visit("https://www.almosafer.com/ar");
  });
  it(" default Currency ", () => {
    //default Currency
    cy.get('[data-testid="Header__CurrencySelector"]')
      .should('include.text', "SAR");
  });
});
describe("flight tab is active", () => {
  before(() => {
    //go to the Almosafer website
    cy.visit("https://www.almosafer.com/ar");
  });
  it(" flight tab is active ", () => {
    // flight tab is active
    cy.get('#uncontrolled-tab-example-tab-flights')
      .should("have.class", "active")
  });
});
