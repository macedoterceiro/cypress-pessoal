/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash")

describe('Cypress APIs', () => {

  let token = "bearer ";

  context('T-POSTO Auth', () => {
    it('Cenário 1: login', () => {
      cy.request({
        method: "post",
        url: "auth/login",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("t-posto-api-key"),
          "Content-Type": "application/json",
        },
        body: {
          "usuario": "MARCELOW",
          "senha": "GA1313",
          "banco": "2"
        }
      }).then((response) => {
        token = token + response.body.content.token;
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 2: user-info', () => {
      cy.request({
        method: "get",
        url: "auth/user-info",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("t-posto-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 3: logout', () => {
      cy.request({
        method: "post",
        url: "auth/logout",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("t-posto-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.body.content.mensagem).to.equals("Logout realizado com sucesso.");
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

  })

})
