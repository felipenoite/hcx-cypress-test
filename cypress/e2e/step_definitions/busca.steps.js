import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import buscaPage from "../../pages/buscaPage";

When("busco pelo produto {string}", (termo) => {
  buscaPage.buscar(termo);
});

Then("devo visualizar a lista de produtos encontrados", () => {
  buscaPage.elements
    .tituloResultados()
    .should("be.visible")
    .and("contain.text", "Searched Products");
  buscaPage.elements.listaProdutos().should("have.length.greaterThan", 0);
});

Then("ao menos um resultado deve conter o termo {string}", (termo) => {
  buscaPage.elements
    .nomesProdutos()
    .should("contain.text", termo);
});

Then("nenhum produto deve ser exibido na lista de resultados", () => {
  buscaPage.elements.listaProdutos().should("not.exist");
});
