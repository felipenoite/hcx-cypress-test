class BuscaPage {
  elements = {
    inputBusca: () => cy.get("#search_product"),
    btnBuscar: () => cy.get("#submit_search"),
    tituloResultados: () => cy.get(".features_items h2.title"),
    listaProdutos: () => cy.get(".features_items .product-image-wrapper"),
    nomesProdutos: () => cy.get(".features_items .productinfo p"),
  };

  visitar() {
    cy.visit("/products");
  }

  buscar(termo) {
    this.elements.inputBusca().clear().type(termo);
    this.elements.btnBuscar().click();
  }
}

export default new BuscaPage();
