import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";

Given("que estou na página de login", () => {
  loginPage.visitar();
});

When("preencho o e-mail {string} e a senha {string}", (email, senha) => {
  loginPage.preencherEmail(email);
  loginPage.preencherSenha(senha);
});

When("clico no botão de login", () => {
  loginPage.clicarLogin();
});

When("clico no botão de login sem preencher os campos", () => {
  loginPage.clicarLogin();
});

When("clico em logout", () => {
  loginPage.clicarLogout();
});

Then("devo visualizar a mensagem {string} no topo da página", (mensagem) => {
  cy.contains("a", mensagem).should("be.visible");
});

Then("devo visualizar a mensagem de erro {string}", (mensagem) => {
  loginPage.elements
    .mensagemErro()
    .should("be.visible")
    .and("contain.text", mensagem);
});

Then("devo ser redirecionado para a página de login", () => {
  cy.url().should("include", "/login");
  loginPage.elements.inputEmail().should("be.visible");
});

Then("devo permanecer na página de login", () => {
  cy.url().should("include", "/login");
  loginPage.elements.btnLogin().should("be.visible");
});
