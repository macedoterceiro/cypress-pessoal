/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash")

describe('Cypress APIs', () => {

  let token = "bearer "
  before(function() {
    cy.login().then((response) => {
      token = token + response;
    })
  })
  
  context('T-POSTO BFF Auth', () => {
    it('Cenário 1: logout', () => {
      cy.request({
        method: "post",
        url: "auth/logout",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.content).to.equals("Logout realizado com sucesso.");
        expect(response.body.notifications).to.be.empty;
      })
    });
  })

})
