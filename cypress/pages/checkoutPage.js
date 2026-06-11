class CheckoutPage {
  elements = {
    nomesProdutosRevisao: () => cy.get("#cart_info .cart_description h4 a"),
    quantidades: () => cy.get("#cart_info .cart_quantity"),
    precos: () => cy.get("#cart_info .cart_price p"),
    totaisPorProduto: () => cy.get("#cart_info .cart_total_price"),
    modalLoginObrigatorio: () => cy.get("#checkoutModal"),
  };
}

export default new CheckoutPage();
