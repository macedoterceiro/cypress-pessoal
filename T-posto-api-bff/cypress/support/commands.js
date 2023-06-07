// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.request({
        method: "post",
        url: "https://apimgmt-dev-001.azure-api.net/tpostomap/api/v1/auth/login",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("t-posto-api-key"),
          "Content-Type": "application/json",
        },
        body: {
          "usuario": "CRM3850",
          "senha": "WNB194",
          "banco": "2"
        }
      }).then((response) => {
        return response.body.content.token;
      })
})