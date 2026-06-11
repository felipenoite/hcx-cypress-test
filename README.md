# hcx-cypress-test

Automação de testes **Web** e **API** desenvolvida como parte de um teste técnico, utilizando **Cypress** com **Cucumber (BDD)** e **JavaScript**.

## Tecnologias

| Tecnologia | Versão | Descrição |
|---|---|---|
| [Cypress](https://www.cypress.io/) | ^15.x | Framework de automação de testes |
| [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor) | ^24.x | Escrita dos cenários em BDD (Gherkin) |
| JavaScript (Node.js) | 18+ | Linguagem de programação |

## Aplicações testadas

- **Web:** [https://www.automationexercise.com](https://www.automationexercise.com)
- **API:** [https://api.trello.com/1/actions/592f11060f95a3d3d46a987a](https://api.trello.com/1/actions/592f11060f95a3d3d46a987a)

## Pré-requisitos

- [Node.js](https://nodejs.org/) versão **18 ou superior**
- npm (instalado junto com o Node.js)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/felipenoite/hcx-cypress-test.git
cd hcx-cypress-test
```

2. Instale as dependências:

```bash
npm install
```

## Execução dos testes

### Modo interativo (com interface do Cypress)

```bash
npm run cy:open
```

Selecione **E2E Testing**, escolha o navegador e clique na feature desejada.

### Modo headless (linha de comando)

Executa todas as features:

```bash
npm run cy:run
```

Executa uma feature específica:

```bash
npx cypress run --spec "cypress/e2e/features/login.feature"
```

## Estrutura do projeto

```
hcx-cypress-test/
├── cypress/
│   ├── e2e/
│   │   ├── features/            # Cenários BDD escritos em Gherkin (pt-BR)
│   │   │   ├── login.feature
│   │   │   ├── busca.feature
│   │   │   ├── carrinho.feature
│   │   │   ├── checkout.feature
│   │   │   └── api.feature
│   │   └── step_definitions/    # Implementação dos steps
│   ├── fixtures/                # Massa de dados (usuários de teste)
│   ├── pages/                   # Page Objects (seletores e ações de cada página)
│   └── support/                 # Comandos customizados e configurações globais
├── cypress.config.js            # Configurações do Cypress
└── package.json
```

## Cenários automatizados

### Desafio Web

| Feature | Cenários positivos | Cenários negativos |
|---|---|---|
| **Login** | Login com credenciais válidas; Logout após login válido | Login com credenciais inválidas; Login sem preencher os campos |
| **Busca** | Buscar produto existente; Validar o termo buscado nos resultados | Buscar produto inexistente; Buscar com caracteres especiais |
| **Carrinho** | Adicionar um produto; Adicionar dois produtos | Acessar o carrinho vazio; Remover o produto do carrinho |
| **Checkout (tela de pagamento)** | Validar produto na revisão do pedido; Validar quantidade e valor total | Finalizar compra sem estar logado; Finalizar compra com o carrinho vazio |

### Desafio API

| Cenário | Validação |
|---|---|
| GET em uma action existente | Status code **200** e exibição do conteúdo do campo `name` da estrutura `list` (no Cypress Runner e no terminal) |
| GET em uma action inexistente | Status code **404** |

## Massa de dados

Os usuários de teste estão centralizados em `cypress/fixtures/usuarios.json`:

- **Login válido:** `teste2024@teste.com.br` / `teste`
- **Login inválido:** `teste2021@teste.com.br` / `teste`

## Observações

- **Independência dos testes:** todos os cenários são independentes e podem ser executados em qualquer ordem — cada um realiza o próprio setup (login, limpeza do carrinho, inclusão de produtos). A ordem de execução definida no array `specPattern` (`login → busca → carrinho → checkout → api`) é apenas organizacional, para que o relatório siga o fluxo do usuário.
- Os cenários de checkout limpam o carrinho do usuário logado antes da execução, garantindo independência entre os testes (o site salva o carrinho na conta).
- O site testado é público e apresenta lentidão intermitente. Para garantir estabilidade, o projeto:
  - bloqueia os domínios de anúncios (`blockHosts`), que atrasam o carregamento das páginas;
  - aguarda a resposta do serviço `/add_to_cart` antes de interagir com o modal do carrinho (`cy.intercept`/`cy.wait`);
  - utiliza `pageLoadTimeout` maior e 1 retry por cenário no modo headless (`retries.runMode`).
- O site possui scripts de anúncios que disparam exceções não tratadas; elas são ignoradas em `cypress/support/e2e.js` por não fazerem parte da aplicação.
- O `package.json` possui um override fixando o `tsx@4.19.2` para contornar uma incompatibilidade do `esbuild 0.28` no Windows.
