# language: pt
Funcionalidade: Login
  Como usuário do site Automation Exercise
  Quero realizar login na plataforma
  Para acessar a minha conta

  Contexto:
    Dado que estou na página de login

  Cenário: Login com credenciais válidas
    Quando preencho o e-mail "teste2024@teste.com.br" e a senha "teste"
    E clico no botão de login
    Então devo visualizar a mensagem "Logged in as" no topo da página

  Cenário: Logout após login válido
    Quando preencho o e-mail "teste2024@teste.com.br" e a senha "teste"
    E clico no botão de login
    E clico em logout
    Então devo ser redirecionado para a página de login

  Cenário: Login com credenciais inválidas
    Quando preencho o e-mail "teste2021@teste.com.br" e a senha "teste"
    E clico no botão de login
    Então devo visualizar a mensagem de erro "Your email or password is incorrect!"

  Cenário: Login sem preencher os campos
    Quando clico no botão de login sem preencher os campos
    Então devo permanecer na página de login
