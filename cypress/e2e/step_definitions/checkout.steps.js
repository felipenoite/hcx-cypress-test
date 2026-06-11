import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import carrinhoPage from "../../pages/carrinhoPage";
import checkoutPage from "../../pages/checkoutPage";

When("prossigo para o checkout", () => {
  carrinhoPage.prosseguirParaCheckout();
});

Then("o produto adicionado deve estar listado na revisão do pedido", () => {
  cy.url().should("include", "/checkout");
  cy.get("@nomeProduto0").then((nomeProduto) => {
    checkoutPage.elements
      .nomesProdutosRevisao()
      .should("contain.text", nomeProduto.trim());
  });
});

Then("a quantidade do produto na revisão do pedido deve ser {int}", (quantidade) => {
  cy.url().should("include", "/checkout");
  checkoutPage.elements
    .quantidades()
    .first()
    .should("contain.text", quantidade);
});

Then("o valor total deve corresponder ao preço unitário do produto", () => {
  checkoutPage.elements
    .precos()
    .first()
    .invoke("text")
    .then((preco) => {
      checkoutPage.elements
        .totaisPorProduto()
        .first()
        .should("have.text", preco.trim());
    });
});

Then("devo visualizar o modal solicitando login ou cadastro", () => {
  checkoutPage.elements
    .modalLoginObrigatorio()
    .should("be.visible")
    .and("contain.text", "Register / Login");
});

Then("o botão de checkout não deve estar disponível", () => {
  carrinhoPage.elements.btnCheckout().should("not.exist");
});
