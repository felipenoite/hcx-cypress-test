# language: pt
Funcionalidade: Adicionar produto ao carrinho
  Como usuário do site Automation Exercise
  Quero adicionar produtos ao carrinho
  Para realizar a compra posteriormente

  Cenário: Adicionar um produto ao carrinho
    Dado que estou na página de produtos
    Quando adiciono o primeiro produto da lista ao carrinho
    E acesso o carrinho
    Então o carrinho deve conter 1 produto
    E o produto adicionado deve estar listado no carrinho

  Cenário: Adicionar dois produtos ao carrinho
    Dado que estou na página de produtos
    Quando adiciono o primeiro produto da lista ao carrinho
    E adiciono o segundo produto da lista ao carrinho
    E acesso o carrinho
    Então o carrinho deve conter 2 produtos

  Cenário: Acessar o carrinho sem adicionar produtos
    Dado que acesso o carrinho sem produtos adicionados
    Então devo visualizar a mensagem de carrinho vazio

  Cenário: Remover o produto do carrinho
    Dado que estou na página de produtos
    Quando adiciono o primeiro produto da lista ao carrinho
    E acesso o carrinho
    E removo o produto do carrinho
    Então devo visualizar a mensagem de carrinho vazio
