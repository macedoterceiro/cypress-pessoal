/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash")

describe('Cypress APIs', () => {

  let token = "bearer "
  before(function() {
    cy.login().then((response) => {
      token = token + response;
    })
  })

  context('T-POSTO BFF Procedimentos Médicos', () => {
    it('Cenário 1: procedure', () => {
      cy.request({
        method: "get",
        url: "medical-procedure?codigoAtendimento=<integer>&codigoPaciente=<integer>&codigo=<string>&nome=<string>&pagina=<integer>&limite=<integer>",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 2: medical-supplies', () => {
      cy.request({
        method: "get",
        url: "medical-procedure/medical-supplies?codigoAtendimento=<integer>&codigoProcedimento=<integer>",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });
    
    it('Cenário 3: requested', () => {
      cy.request({
        method: "post",
        url: "medical-procedure/patients/:patientId/requested",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 4: surgery-reports', () => {
      cy.request({
        method: "post",
        url: "medical-procedure/patients/:patientId/surgery-reports?pagina=<integer>&limite=<integer>",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 5: suspend', () => {
      cy.request({
        method: "put",
        url: "medical-procedure/suspend",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
        body: {
          "codigoAtendimento": "<integer>",
          "numeroGuia": "<integer>",
          "codigoProcedimento": "<string>"
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 6: printing-files', () => {
      cy.request({
        method: "put",
        url: "medical-procedure/printing-files",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
        body: {
          "guias": [
            {
              "codigoAtendimento": "<integer>",
              "numeroGuia": "<string>"
            },
            {
              "codigoAtendimento": "<integer>",
              "numeroGuia": "<string>"
            }
          ]
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 7: medical-procedure', () => {
      cy.request({
        method: "put",
        url: "medical-procedure",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
        body: {
          "codigoAtendimento": "<integer>",
          "prioridade": 0,
          "dataProgramada": "<dateTime>",
          "recomendacoes": "<string>",
          "observacaoOpme": "<string>",
          "procedimentos": [
            {
              "codigo": "<string>",
              "quantidade": "<integer>",
              "mme": "<string>",
              "lado": 4
            },
            {
              "codigo": "<string>",
              "quantidade": "<integer>",
              "mme": "<string>",
              "lado": 4
            }
          ]
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

  })

})