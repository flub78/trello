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

        cy.get(".add-form").then(() => {
            cy.get('.add-form input[type="submit"]').click();
            cy.wait(1000);
            cy.get(".task h3").each(($el) => {
                return cy.contains("Cypress Task 1");
            });
        });
    });

    // Delete task
    it("can delete a task", () => {
        cy.get(".task h3").then(() => {
            cy.get(".task h3 svg").first().click();

            cy.wait(1000);

            cy.get(".task")
                .each(($el) => {
                    return $el;
                })
                .then(($el) => expect($el).to.have.length(2));
        });
    });

    // Mark task
    it("can mark a task", () => {
        cy.get(".task:first ").then(() => {
            cy.get(".task").last().dblclick();

            cy.wait(1000);

            cy.get(".reminder")
                .each(($el) => {
                    return $el;
                })
                .then(($el) => expect($el).to.have.length(3));
        });
    });
});