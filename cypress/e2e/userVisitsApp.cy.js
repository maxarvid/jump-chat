describe("When user visits application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to display a canvas", () => {
    cy.get("[data-cy=game-canvas]").should("be.visible");
  });

  it("is expected to display a start jump-chat button", () => {
    cy.get("[data-cy=start-game-btn]").should("be.visible");
  });
});
