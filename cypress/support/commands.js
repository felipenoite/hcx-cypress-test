import loginPage from "../pages/loginPage";

// Realiza login na aplicação e valida que o usuário foi autenticado
Cypress.Commands.add("login", (email, senha) => {
  loginPage.visitar();
  loginPage.preencherEmail(email);
  loginPage.preencherSenha(senha);
  loginPage.clicarLogin();
  cy.contains("a", "Logged in as").should("be.visible");
});

// Remove todos os produtos do carrinho, garantindo um estado limpo
// para os cenários (o carrinho fica salvo na conta do usuário logado)
Cypress.Commands.add("limparCarrinho", () => {
  cy.visit("/view_cart");
  cy.get("body").then(($body) => {
    if ($body.find(".cart_quantity_delete").length > 0) {
      cy.get(".cart_quantity_delete").first().click();
      cy.limparCarrinho();
    }
  });
});
