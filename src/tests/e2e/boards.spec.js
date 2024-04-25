/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */

const afterLoginFunction = () => {
    // cy.visit('${Cypress.env("baseUrl")}');
};

describe("Hello test", () => {
    beforeEach(() => {
        afterLoginFunction();
        // cy.wait(5000);
    });

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