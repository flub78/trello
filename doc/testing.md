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

### Dependencies on the Backend server

End 2 End tests are executed by manipulating user interface in the WEB browser.

Some tests may have dependencies on the backend server.
* Some tests can only run when the backend is up and running.
* Some tests could especially run against a down backend server (To test the behavior of the frontend in this case).
* Some tests could rely on some credentials delivered or contained by the backend (capacity to login).

And the point is that the cypress tests usually do not start or stop the backend. It would be convenient for the tests to be able to start and stop the backend or to se it up with different configuration or contains (or to have multiple test backends to test different scenarios).

A global approach to this issue is to handle it at the test pipeline level (jenkins) and rely on the CI server to setup test environments before to run specific test suites against the associated backend servers.

Thats the absolute answer but it may be expensive.

Maybe that a convenient approach would be to deploy a test backend able to understand additional commands and run accordingly.

Example of such commands:

* test=noreply the server (do not reply)
* save_database_to="xxx"
* restore_database_from="xxx"
* return_error=404, 500, etc.

Note that as the API server is stateless, these command would have to be passed as parameters.

Note that it would also imply for the front end to support these extra test mode and capacity to transmit test data.


  
