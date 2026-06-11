import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import buscaPage from "../../pages/buscaPage";
import carrinhoPage from "../../pages/carrinhoPage";

// Steps compartilhados entre as features de carrinho e checkout

Given("que estou na página de produtos", () => {
  buscaPage.visitar();
});

Given("que estou logado com um usuário válido", () => {
  cy.fixture("usuarios").then((usuarios) => {
    cy.login(usuarios.valido.email, usuarios.valido.senha);
  });
  cy.limparCarrinho();
});

When("adiciono o primeiro produto da lista ao carrinho", () => {
  carrinhoPage.adicionarProduto(0);
});

When("adiciono o segundo produto da lista ao carrinho", () => {
  carrinhoPage.adicionarProduto(1);
});

When("acesso o carrinho", () => {
  carrinhoPage.visitar();
});

Given("que acesso o carrinho sem produtos adicionados", () => {
  carrinhoPage.visitar();
});

Then("devo visualizar a mensagem de carrinho vazio", () => {
  carrinhoPage.elements
    .mensagemCarrinhoVazio()
    .should("be.visible")
    .and("contain.text", "Cart is empty!");
});
