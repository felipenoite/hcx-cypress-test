# language: pt
Funcionalidade: Busca de produtos
  Como usuário do site Automation Exercise
  Quero buscar produtos pelo nome
  Para encontrar rapidamente o que desejo comprar

  Contexto:
    Dado que estou na página de produtos

  Cenário: Buscar um produto existente
    Quando busco pelo produto "Tshirt"
    Então devo visualizar a lista de produtos encontrados

  Cenário: Buscar um produto existente e validar o termo nos resultados
    Quando busco pelo produto "Dress"
    Então devo visualizar a lista de produtos encontrados
    E ao menos um resultado deve conter o termo "Dress"

  Cenário: Buscar um produto inexistente
    Quando busco pelo produto "ProdutoInexistente123"
    Então nenhum produto deve ser exibido na lista de resultados

  Cenário: Buscar com caracteres especiais
    Quando busco pelo produto "@#$%&"
    Então nenhum produto deve ser exibido na lista de resultados
