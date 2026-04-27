describe('Busca e navegação por jogos', () => {
  it('busca com query vazia mostra a mensagem inicial', () => {
    cy.visit('/buscar/');
    cy.contains(/use a barra de busca/i).should('be.visible');
  });

  it('busca por uma letra retorna resultados clicáveis', () => {
    cy.visit('/buscar/');
    cy.get('input[name="q"]').type('a');
    cy.contains('button', 'Buscar').click();
    cy.url().should('include', 'q=a');

    cy.get('body').then(($body) => {
      if ($body.find('.result-card').length > 0) {
        cy.get('.result-card').first().click();
        cy.url().should('include', '/jogo/');
        cy.get('h1.detail-title').should('be.visible');
      } else {
        cy.contains(/nenhum jogo encontrado/i).should('be.visible');
      }
    });
  });

  it('busca por termo improvável mostra mensagem de vazio', () => {
    cy.visit('/buscar/?q=zzzzzqqqqxxxx');
    cy.contains(/nenhum jogo encontrado/i).should('be.visible');
  });

  it('clicar num jogo destacado da home leva à página de detalhe', () => {
    cy.visit('/');
    cy.get('.game-card, .top-card').first().click();
    cy.url().should('include', '/jogo/');
    cy.get('h1.detail-title').should('be.visible');
  });

  it('clicar num gênero leva para a listagem do gênero', () => {
    cy.visit('/');
    cy.get('body').then(($body) => {
      if ($body.find('.genre-chip').length > 0) {
        cy.get('.genre-chip').first().click();
        cy.url().should('include', '/genero/');
      } else {
        cy.log('Nenhum gênero cadastrado — pulando assert de navegação');
      }
    });
  });
});
