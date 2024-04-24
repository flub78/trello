/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */

const afterLoginFunction = () => {
    cy.visit('${Cypress.env("baseUrl")}');
};

describe("Tasks tests", () => {
    beforeEach(() => {
        afterLoginFunction();
        cy.wait(5000);
    });

    // Add task

    it("can add a new task", () => {
        cy.get("header .btn").click();
        cy.wait(1000);

        cy.get('.add-form input[placeholder="Add Task"]').type("Cypress Task 1");
        cy.get('.add-form input[placeholder="Add Day & Time"]').type(
            "March 18 at 4:00pm"
        );


    });




});