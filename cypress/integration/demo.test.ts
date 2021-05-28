describe("Demo", () => {
  before(() => {
    cy.visit("localhost:19006");
    cy.waitForReact();
  });
  it("Find requested element", () => {
    cy.react("Button", { props: { "data-test": "button" } }).should(
      "have.length",
      2
    );
  });
  it("Find requested element after small delay", () => {
    cy.wait(1000);
    cy.react("Button", { props: { "data-test": "button" } }).should(
      "have.length",
      2
    );
  });
});
