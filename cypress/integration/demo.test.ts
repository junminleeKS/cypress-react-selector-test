describe("Demo", () => {
  before(() => {
    cy.visit("localhost:19006");
    cy.waitForReact();
  });
  it("Find requested element", () => {
    cy.react("Button").should("have.length", 2);
  });
  it("Find requested element after small delay", () => {
    cy.wait(1000);
    cy.react("Button").should("have.length", 2);
  });
});
