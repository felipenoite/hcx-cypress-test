const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    // A ordem do array define a ordem de execução das features,
    // seguindo o fluxo do usuário: login > busca > carrinho > checkout
    specPattern: [
      "cypress/e2e/features/login.feature",
      "cypress/e2e/features/busca.feature",
      "cypress/e2e/features/carrinho.feature",
      "cypress/e2e/features/checkout.feature",
      "cypress/e2e/features/api.feature",
    ],
    viewportWidth: 1366,
    viewportHeight: 768,
    // Bloqueia os domínios de anúncios do site, que atrasam o carregamento
    // das páginas e causam instabilidade nos testes
    blockHosts: [
      "*.googlesyndication.com",
      "*.doubleclick.net",
      "*.googleadservices.com",
      "*.googletagmanager.com",
      "*.google-analytics.com",
      "*.adtrafficquality.google",
    ],
    video: false,
    experimentalRunAllSpecs: true,
    defaultCommandTimeout: 10000,
    // O site testado é público e apresenta lentidão intermitente;
    // o timeout maior e o retry no modo headless evitam falhas falsas
    pageLoadTimeout: 120000,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );

      // Permite exibir mensagens no terminal durante a execução headless
      on("task", {
        log(mensagem) {
          console.log(mensagem);
          return null;
        },
      });

      return config;
    },
  },
});
