describe("When user visits application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to render a hello world", () => {
    cy.get("body").should("contain.text", "Hello world");
  });
});
