/// <reference types="cypress" />
context('Intercept', () => {
    it('chekc intercept 1', () => {
        cy.intercept('/plate.stl').as('files');
        cy.visit('localhost:8010');

        cy.wait('@files');
    });

    it('chekc intercept 2', () => {
        cy.intercept('/plate.stl').as('files');
        cy.visit('localhost:8010');

        cy.wait('@files');
    });
})
