/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash")

describe('Cypress APIs', () => {

  let token = "bearer "
  before(function() {
    cy.login().then((response) => {
      token = token + response;
    })
  })

  context('T-POSTO BFF Opiniões Médicas', () => {
    it('Cenário 1: patient-pending', () => {
      cy.request({
        method: "get",
        url: "medical-opinion/patients/:patientId/pending",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 2: branches-specialties', () => {
      cy.request({
        method: "get",
        url: "medical-opinion/branches/:branchId/specialties?codigoPaciente=<integer>",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });
    
    it('Cenário 3: branches-pending', () => {
      cy.request({
        method: "post",
        url: "medical-opinion/branches/:branchId/pending?codigoPosto=<string>&dias=<integer>",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 4: patients-responded', () => {
      cy.request({
        method: "post",
        url: "medical-opinion/patients/:patientId/responded",
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
        url: "medical-opinion/suspend",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
        body: {
          "codigoAtendimento": "<integer>",
          "codigoOcorrencia": "<integer>",
          "codigoOrdem": "<integer>",
          "numeroGuia": "<string>",
          "justificativa": "<string>"
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 6: printing-files', () => {
      cy.request({
        method: "put",
        url: "medical-opinion/printing-files",
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

    it('Cenário 7: request', () => {
      cy.request({
        method: "put",
        url: "medical-opinion/request",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
        body: {
          "solicitacoes": [
            {
              "codigoAtendimento": "<integer>",
              "justificativa": "<string>",
              "codigoProcedimento": "<string>",
              "codigoEspecialidade": "<integer>",
              "codigoDetalheEspecialidade": "<integer>",
              "critico": "<boolean>"
            },
            {
              "codigoAtendimento": "<integer>",
              "justificativa": "<string>",
              "codigoProcedimento": "<string>",
              "codigoEspecialidade": "<integer>",
              "codigoDetalheEspecialidade": "<integer>",
              "critico": "<boolean>"
            }
          ]
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 8: respond', () => {
      cy.request({
        method: "put",
        url: "medical-procedure",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
        body: {
          "codigoAtendimento": "<integer>",
          "codigoOrdem": "<integer>",
          "numeroGuia": "<string>",
          "resposta": "<string>"
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

  })

})