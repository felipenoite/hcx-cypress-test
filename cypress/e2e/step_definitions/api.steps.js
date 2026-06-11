import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

const URL_API_TRELLO = "https://api.trello.com/1/actions";

When("envio uma requisição GET para a action {string}", (actionId) => {
  cy.request({
    method: "GET",
    url: `${URL_API_TRELLO}/${actionId}`,
    failOnStatusCode: false,
  }).as("resposta");
});

Then("o status code da resposta deve ser {int}", (statusCode) => {
  cy.get("@resposta").its("status").should("eq", statusCode);
});

Then('o conteúdo do campo "name" da estrutura "list" deve ser exibido', () => {
  cy.get("@resposta").then((resposta) => {
    const nomeDaLista = resposta.body.data.list.name;

    expect(nomeDaLista, 'campo "name" da estrutura "list"').to.not.be.empty;

    // Exibe o conteúdo no Cypress Runner e no terminal
    cy.log(`Campo "name" da estrutura "list": ${nomeDaLista}`);
    cy.task("log", `Campo "name" da estrutura "list": ${nomeDaLista}`);
  });
});
