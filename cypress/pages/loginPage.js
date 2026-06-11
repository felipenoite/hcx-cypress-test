class LoginPage {
  elements = {
    inputEmail: () => cy.get('[data-qa="login-email"]'),
    inputSenha: () => cy.get('[data-qa="login-password"]'),
    btnLogin: () => cy.get('[data-qa="login-button"]'),
    mensagemErro: () => cy.get(".login-form form p"),
    linkLogout: () => cy.get('a[href="/logout"]'),
  };

  visitar() {
    cy.visit("/login");
  }

  preencherEmail(email) {
    this.elements.inputEmail().type(email);
  }

  preencherSenha(senha) {
    this.elements.inputSenha().type(senha, { log: false });
  }

  clicarLogin() {
    this.elements.btnLogin().click();
  }

  clicarLogout() {
    this.elements.linkLogout().click();
  }
}

export default new LoginPage();
