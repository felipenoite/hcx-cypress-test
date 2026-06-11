# language: pt
Funcionalidade: Validar produtos do carrinho na tela de pagamento
  Como usuário do site Automation Exercise
  Quero revisar os produtos do carrinho na tela de pagamento
  Para confirmar a compra com segurança

  Cenário: Validar o produto incluído na tela de pagamento
    Dado que estou logado com um usuário válido
    E que estou na página de produtos
    Quando adiciono o primeiro produto da lista ao carrinho
    E acesso o carrinho
    E prossigo para o checkout
    Então o produto adicionado deve estar listado na revisão do pedido

  Cenário: Validar quantidade e valor total na tela de pagamento
    Dado que estou logado com um usuário válido
    E que estou na página de produtos
    Quando adiciono o primeiro produto da lista ao carrinho
    E acesso o carrinho
    E prossigo para o checkout
    Então a quantidade do produto na revisão do pedido deve ser 1
    E o valor total deve corresponder ao preço unitário do produto

  Cenário: Tentar finalizar a compra sem estar logado
    Dado que estou na página de produtos
    Quando adiciono o primeiro produto da lista ao carrinho
    E acesso o carrinho
    E prossigo para o checkout
    Então devo visualizar o modal solicitando login ou cadastro

  Cenário: Tentar finalizar a compra com o carrinho vazio
    Dado que acesso o carrinho sem produtos adicionados
    Então devo visualizar a mensagem de carrinho vazio
    E o botão de checkout não deve estar disponível
