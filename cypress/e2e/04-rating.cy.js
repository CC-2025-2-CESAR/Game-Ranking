describe('Avaliação de jogos (estrelas)', () => {
  beforeEach(() => {
    cy.createTestUser();
  });

  it('usuário autenticado consegue avaliar um jogo com 4 estrelas', () => {
    cy.visit('/');
    cy.get('.game-card, .top-card').first().click();
    cy.url().should('include', '/jogo/');

    cy.get('button[name="score"][value="4"]').click();

    cy.url().should('include', '/jogo/');
    cy.contains('Sua avaliação atual é 4 estrela(s)').should('be.visible');
    cy.get('button[name="score"][value="4"]').should('have.class', 'active');
  });

  it('re-avaliar atualiza a nota do usuário', () => {
    cy.visit('/');
    cy.get('.game-card, .top-card').first().click();

    cy.get('button[name="score"][value="2"]').click();
    cy.contains('Sua avaliação atual é 2 estrela(s)').should('be.visible');

    cy.get('button[name="score"][value="5"]').click();
    cy.contains('Sua avaliação atual é 5 estrela(s)').should('be.visible');
    cy.get('button[name="score"][value="5"]').should('have.class', 'active');
  });

  it('usuário deslogado vê o convite para entrar antes de avaliar', () => {
    cy.visit('/accounts/logout/');
    cy.visit('/');
    cy.get('.game-card, .top-card').first().click();
    cy.contains(/entre.*para avaliar/i).should('be.visible');
    cy.get('button[name="score"]').should('not.exist');
  });
});
