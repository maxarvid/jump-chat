describe("When user visits application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to display a canvas", () => {
    cy.get("[data-cy=game-canvas]").should('be.visible')
  });
});
