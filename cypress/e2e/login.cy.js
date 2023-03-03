/// <reference types="cypress" />

describe('Teste na tela de Login', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/');
    })
    it('Validação campos obrigatórios', ()=>{
        cy.get('#form-login').submit();
        cy.get('#input-email-helper-text').contains('Campo obrigatório')
        cy.get('#input-password-helper-text').contains('Campo obrigatório')
    })
    it('Validação input email', ()=>{
        cy.get('#input-email').type('leandro.almeida98@hotmail.com');
        cy.get('#input-email')  // or .create-name, maybe a typo in the question
        .invoke('val')
        .should('equal', 'leandro.almeida98@hotmail.com')
    })
    it('Validação input senha', ()=>{
        cy.get('#input-password').type('123456789');
        cy.get('#input-password')  // or .create-name, maybe a typo in the question
        .invoke('val')
        .should('equal', '123456789')
    })
    it('Validação login incorreto', () => {
        cy.get('#input-email').click();
        cy.get('#input-email').type('leandro.almeida98@hotmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('#form-login').submit();
        cy.contains('Credenciais de acesso inválidas!')
    })
    it('Validação login certo', () => {
        cy.get('#input-email').click();
        cy.get('#input-email').type('gestorsec@sec.br');
        cy.get('#input-password').type('password');
        cy.get('#form-login').submit();
        cy.contains('Sucesso na requisição')
    })
})