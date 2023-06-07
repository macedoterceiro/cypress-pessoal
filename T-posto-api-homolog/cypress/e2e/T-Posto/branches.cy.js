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
    it('Cenário 1: branches', () => {
      cy.request({
        method: "get",
        url: "branches",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("t-posto-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 2: summary', () => {
      cy.request({
        method: "get",
        url: "branches/001/summary",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("t-posto-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 3: stations', () => {
      cy.request({
        method: "get",
        url: "branches/001/stations",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("t-posto-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 4: medical-beds', () => {
      cy.request({
        method: "get",
        url: "branches/:branchId/medical-beds?codigoPosto=1331A0&codigoProntuario=5504312&somenteInternacao=false&somenteAltaProgramada=false&somenteExamesCriticos=false&pagina=1&limite=1",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("t-posto-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 5: search', () => {
      cy.request({
        method: "get",
        url: "branches/001/search?nomePaciente=Jose%20Rosio%20Pinheiro%20Landim&somenteAltaProgramada=false&somenteExamesCriticos=false",
        headers: {
          "Ocp-Apim-Subscription-Key": "e3dce78f86c54146810a111831fc5940",
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

  })

})
