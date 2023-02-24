/// <reference types="cypress" />

describe('Teste na tela de Login', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/');
    })
    it('Testa se o form de login renderizou', () => {
        cy.get('#input-email').click();
        cy.get('#input-email').type('leandro.almeida98@hotmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('#bttn-login').click();
    })
    it('Teste se o input email preencheu', ()=>{
        cy.get('#input-email').type('leandro.almeida98@hotmail.com');
        cy.get('#input-email')  // or .create-name, maybe a typo in the question
        .invoke('val')
        .should('equal', 'leandro.almeida98@hotmail.com')
    })
    it('Teste se o input senha preencheu', ()=>{
        cy.get('#input-password').type('123456789');
        cy.get('#input-password')  // or .create-name, maybe a typo in the question
        .invoke('val')
        .should('equal', '123456789')
    })
})