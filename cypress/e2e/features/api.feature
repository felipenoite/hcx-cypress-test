# language: pt
Funcionalidade: Desafio API - Trello
  Como consumidor da API do Trello
  Quero consultar uma action
  Para validar o status code e exibir o nome da estrutura "list"

  Cenário: Consultar uma action existente e exibir o campo "name" da estrutura "list"
    Quando envio uma requisição GET para a action "592f11060f95a3d3d46a987a"
    Então o status code da resposta deve ser 200
    E o conteúdo do campo "name" da estrutura "list" deve ser exibido

  Cenário: Consultar uma action inexistente
    Quando envio uma requisição GET para a action "000000000000000000000000"
    Então o status code da resposta deve ser 404
