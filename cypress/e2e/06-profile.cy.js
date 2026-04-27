describe('Perfil do usuário', () => {
  it('perfil vazio mostra mensagens de "ainda não avaliou" e "ainda não comentou"', () => {
    cy.createTestUser();
    cy.visit('/accounts/profile/');
    cy.contains('h1', 'Seu perfil').should('be.visible');
    cy.contains(/ainda n[aã]o avaliou/i).should('be.visible');
    cy.contains(/ainda n[aã]o comentou/i).should('be.visible');
  });

  it('avaliação e comentário aparecem no perfil após criados', () => {
    cy.createTestUser().then((user) => {
      cy.visit('/');
      cy.get('.game-card, .top-card').first().click();
      cy.url().then((gameUrl) => {
        cy.get('button[name="score"][value="3"]').click();

        cy.visit(gameUrl);
        const texto = `Comentário do perfil ${Date.now()}`;
        cy.get('textarea[name="body"]').clear().type(texto);
        cy.contains('button', /Enviar comentário|Atualizar comentário/).click();

        cy.visit('/accounts/profile/');
        cy.contains('h2', 'Suas avaliações')
          .parent()
          .should('contain', '3 estrela(s)');
        cy.contains('h2', 'Seus comentários')
          .parent()
          .should('contain', texto);
      });
    });
  });
});
