describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen");
    });
    cy.get('[data-cy="name"]').contains("Shubham Patrick");
    cy.get('[data-cy="title"]').contains("Frontend Engineer");
    cy.get('[data-cy="description"]').contains(
      "Build beautiful interfaces & experiences"
    );
    cy.get('[data-cy="github-link"]').click();
    cy.get("@windowOpen").should(
      "be.calledWith",
      "https://github.com/AHTHneeuhl"
    );
    cy.get('[data-cy="linkedin-link"]').click();
    cy.get("@windowOpen").should(
      "be.calledWith",
      "https://www.linkedin.com/in/ahthneeuhl/"
    );
    cy.get('[data-cy="twitter-link"]').click();
    cy.get("@windowOpen").should(
      "be.calledWith",
      "https://twitter.com/ahthneeuhl"
    );
    cy.get('[data-cy="instagram-link"]').click();
    cy.get("@windowOpen").should(
      "be.calledWith",
      "https://instagram.com/ahthneeuhl/"
    );
  });
});

export {};
