/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash")

describe('Cypress APIs', () => {
  let token = "bearer "
  before(function() {
    cy.login().then((response) => {
      token = token + response;
    })
  })

  context('T-POSTO attendances', () => {
    it('Cenário 1: procedure-list', () => {
      cy.request({
        method: "get",
        url: "attendances/101198834",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("t-posto-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it.only('Cenário 2: medication-prescribed', () => {
      cy.request({
        method: "get",
        url: "medication/101198834/prescribed",
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