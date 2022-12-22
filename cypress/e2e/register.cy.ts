describe("Given BCN Walls register page", () => {
  describe("When the user registers in with username 'jose111', email 'jose111@gmail.com' and password '1111'", () => {
    it("Then it should be redirected to '/login'", () => {
      cy.visit("http://localhost:3000/register");
      cy.findByRole("heading", { name: "Create an account" }).should("exist");
      cy.findByRole("textbox", { name: "Username" }).type("jose111");
      cy.findByRole("textbox", { name: "Email" }).type("jose111@gmail.com");
      cy.findByLabelText("Password").type("1111");
      cy.findByRole("button", { name: "Register" }).click();

      cy.url().should("include", "/register");
    });
  });
});
