// Gera username único por execução para evitar colisão no banco compartilhado
Cypress.Commands.add('uniqueUsername', (prefix = 'e2e_user') => {
  const stamp = `${Date.now()}_${Math.floor(Math.random() * 1e4)}`;
  return `${prefix}_${stamp}`;
});

// Cadastra um usuário pelo formulário de registro
Cypress.Commands.add('registerUser', ({ username, email, password }) => {
  cy.visit('/accounts/register/');
  cy.get('#id_username').clear().type(username);
  cy.get('#id_email').clear().type(email);
  cy.get('#id_password1').clear().type(password);
  cy.get('#id_password2').clear().type(password);
  cy.get('form').submit();
});

// Faz login pelo formulário; o Cypress preserva cookies e CSRF
Cypress.Commands.add('loginAs', (username, password) => {
  cy.visit('/accounts/login/');
  cy.get('#id_username').clear().type(username);
  cy.get('#id_password').clear().type(password);
  cy.get('form').submit();
  cy.url().should('not.include', '/accounts/login/');
});

// Cria um usuário novo (cadastro) e devolve as credenciais via callback
Cypress.Commands.add('createTestUser', () => {
  return cy.uniqueUsername().then((username) => {
    const creds = {
      username,
      email: `${username}@example.com`,
      password: 'CypressTest123!',
    };
    cy.registerUser(creds);
    return cy.wrap(creds);
  });
});
