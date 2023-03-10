/// <reference types="cypress" />

describe('Teste na tela de Login', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/');
        // cy.viewport(1920, 1080)
    })
    it('Validação campos obrigatórios', ()=>{
        cy.get('#form-login').submit();
        cy.get('#form-login').submit();
        // cy.get('#form-login').submit();
        cy.get('#input-password-helper-text').contains('Campo obrigatório')
        cy.get('#input-email-helper-text').contains('Campo obrigatório')
        
    })
    it('Validação input email', ()=>{
        cy.get('#input-email').type('leandro.almeida98@hotmail.com');
        cy.get('#input-email')  
        .invoke('val')
        .should('equal', 'leandro.almeida98@hotmail.com')
    })
    it('Validação input senha', ()=>{
        cy.get('#input-password').type('123456789');
        cy.get('#input-password')  
        .invoke('val')
        .should('equal', '123456789')
    })
    it('Validação login incorreto', () => {
        cy.get('#input-email').click();
        cy.get('#input-email').type('teste@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('#form-login').submit();
        cy.contains('Credenciais de acesso inválidas!')
    })
    it('Validação login correto', () => {
        cy.get('#input-email').click();
        cy.get('#input-email').type('leandro.almeida98@hotmail.com');
        cy.get('#input-password').type('password');
        cy.get('#form-login').submit();
        cy.contains('Login efetuado com sucesso!')
    })
})