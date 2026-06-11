import "./commands";

// O site automationexercise.com possui scripts de anúncios que disparam
// exceções não tratadas. Elas não fazem parte da aplicação e não devem
// falhar os testes.
Cypress.on("uncaught:exception", () => false);
