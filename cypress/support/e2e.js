import './commands';

// Evita que erros de JS de terceiros (no app Django, normalmente nada quebra)
// derrubem a suíte. Logamos para debug mas seguimos.
Cypress.on('uncaught:exception', () => false);
