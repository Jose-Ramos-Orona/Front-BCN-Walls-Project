describe("Given a RegisterForm page", () => {
  describe("When the user registers with username 'jose112', email 'jose112@gmail.com' and password '12345'", () => {
    it("Then it should be redirected to '/login'", () => {
      cy.visit("/register");
      cy.findByRole("textbox", { name: "Username" }).type("jose112");
      cy.findByRole("textbox", { name: "Email" }).type("jose112@gmail.com");
      cy.findByTestId("password").type("12345");
      cy.findByRole("button", { name: "Register" }).click();

      cy.findByRole("heading", { level: 2, name: "Create an Account" }).should(
        "exist"
      );
      cy.url().should("include", "/login");
    });
  });
});
