import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import carrinhoPage from "../../pages/carrinhoPage";

When("removo o produto do carrinho", () => {
  carrinhoPage.removerProduto();
});

Then("o carrinho deve conter {int} produto(s)", (quantidade) => {
  carrinhoPage.elements.linhasCarrinho().should("have.length", quantidade);
});

Then("o produto adicionado deve estar listado no carrinho", () => {
  cy.get("@nomeProduto0").then((nomeProduto) => {
    carrinhoPage.elements
      .nomesProdutosCarrinho()
      .should("contain.text", nomeProduto.trim());
  });
});
