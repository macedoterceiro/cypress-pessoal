/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash")

describe('Cypress APIs', () => {

  let token = "bearer "
  before(function() {
    cy.login().then((response) => {
      token = token + response;
    })
  })

  context('T-POSTO stations', () => {
    it('Cenário 1: summary', () => {
      cy.request({
        method: "get",
        url: "stations/1331A0/summary",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("t-posto-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });
  })

})
