class CarrinhoPage {
  elements = {
    cardsProdutos: () => cy.get(".features_items .product-image-wrapper"),
    btnContinuarComprando: () => cy.get("#cartModal .btn-success"),
    linhasCarrinho: () => cy.get("#cart_info_table tbody tr"),
    nomesProdutosCarrinho: () => cy.get("#cart_info_table .cart_description h4 a"),
    btnRemoverProduto: () => cy.get(".cart_quantity_delete"),
    mensagemCarrinhoVazio: () => cy.get("#empty_cart"),
    btnCheckout: () => cy.get(".check_out"),
  };

  visitar() {
    cy.visit("/view_cart");
  }

  // Adiciona o produto da posição informada e guarda o nome dele
  // em um alias para validação posterior (ex.: @nomeProduto0)
  adicionarProduto(indice) {
    cy.intercept("GET", "/add_to_cart/*").as("addToCart");

    this.elements
      .cardsProdutos()
      .eq(indice)
      .find(".productinfo p")
      .invoke("text")
      .as(`nomeProduto${indice}`, { type: "static" });

    this.elements
      .cardsProdutos()
      .eq(indice)
      .find(".productinfo .add-to-cart")
      .click();

    // Aguarda a resposta do serviço antes de interagir com o modal
    cy.wait("@addToCart");
    this.elements.btnContinuarComprando().should("be.visible").click();
  }

  removerProduto() {
    this.elements.btnRemoverProduto().first().click();
  }

  prosseguirParaCheckout() {
    this.elements.btnCheckout().click();
  }
}

export default new CarrinhoPage();
