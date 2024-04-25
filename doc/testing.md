# Testing

The Backend of this application is already eavily tested.

There are unit tests around the library functions and feature tests that check the behavior of the application using the API and some direct access to the database.

The first goal of testing is to provide end to end testing of the whole application.

## Testing tools

Cypress seems to be the most widely used framework for Rect application end to end testing.

Learn Cypress in 3 Hours | Full Cypress Tutorial | Cypress Automation | LambdaTest
https://www.youtube.com/watch?v=wpaW1nQ88RY
3:40.

https://www.lambdatest.com/learning-hub/react-end-to-end-testing

Cypress documentation:
https://docs.cypress.io/guides/overview/why-cypress

## Cypress installation


    npm install cypress --save-dev
    npx cypress open

    npx update-browserslist-db@latest

### Open the Cypress GUI

    npm run test:e2e

### Run the test suite

    npm run test:e2e:cli