describe('Comentários em jogos', () => {
  it('usuário autenticado escreve um comentário e vê ele aparecer', () => {
    cy.createTestUser().then((user) => {
      cy.visit('/');
      cy.get('.game-card, .top-card').first().click();
      cy.url().should('include', '/jogo/');

      const texto = `Comentário automatizado ${Date.now()}`;
      cy.get('textarea[name="body"]').clear().type(texto);
      cy.contains('button', /Enviar comentário|Atualizar comentário/).click();

      cy.url().should('include', '/jogo/');
      cy.get('.comment-card').first().within(() => {
        cy.get('.comment-user').should('contain', user.username);
        cy.get('.comment-body').should('contain', texto);
      });
    });
  });

  it('editar o comentário existente atualiza o texto', () => {
    cy.createTestUser().then((user) => {
      cy.visit('/');
      cy.get('.game-card, .top-card').first().click();

      cy.get('textarea[name="body"]').clear().type('Texto inicial');
      cy.contains('button', 'Enviar comentário').click();

      cy.contains('button', 'Atualizar comentário').should('be.visible');

      const novo = `Texto editado ${Date.now()}`;
      cy.get('textarea[name="body"]').clear().type(novo);
      cy.contains('button', 'Atualizar comentário').click();

      cy.get('.comment-card')
        .filter(`:has(.comment-user:contains("${user.username}"))`)
        .first()
        .find('.comment-body')
        .should('contain', novo);
    });
  });

  it('usuário deslogado vê aviso para entrar antes de comentar', () => {
    cy.visit('/');
    cy.get('.game-card, .top-card').first().click();
    cy.contains(/necess[aá]rio estar logado para comentar/i).should('be.visible');
    cy.get('textarea[name="body"]').should('not.exist');
  });
});
