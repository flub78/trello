/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */


describe("Boards test", () => {
    // Add task
    it("can access the application under test", () => {
        cy.visit('http://localhost:3000/boards');
        cy.visit('http://localhost:3000/boards/create');
        cy.visit('http://localhost:3000/boards/edit/forest');

        cy.contains('Modifier un tableau');
        cy.contains('Valider');
        cy.contains('Retour').click();

        cy.contains('Créer un tableau');
    });
});

describe('Localization', () => {
    it('changes display according to the selected language', () => {
        cy.visit('http://localhost:3000/boards');

        cy.get('[data-testid="rfs-btn"]').click();
        cy.get('#rfs-GB > .ReactFlagsSelect-module_selectOptionValue__vS99- > .ReactFlagsSelect-module_label__27pw9').click();
        cy.get('.thead-dark > tr > :nth-child(5)').should('have.text', 'Email');
        cy.get('h3').should('have.text', 'Boards');

        cy.get('[data-testid="rfs-btn"]').click();
        cy.get('#rfs-FR > .ReactFlagsSelect-module_selectOptionValue__vS99- > .ReactFlagsSelect-module_label__27pw9').click();
        cy.get('.thead-dark > tr > :nth-child(5)').should('have.text', 'Courriel');
        cy.get('h3').should('have.text', 'Tableaux');
    })
});