/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash")

describe('Cypress APIs', () => {

  let token = "bearer "
  before(function() {
    cy.login().then((response) => {
      token = token + response;
    })
  })

  context('T-POSTO BFF Exames de imagem', () => {
    it('Cenário 1: exams', () => {
      cy.request({
        method: "get",
        url: "exams/image?codigoAtendimento=<string>&codigoPaciente=<integer>",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 2: results', () => {
      cy.request({
        method: "get",
        url: "exams/image/patients/:patientId/results",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });
    
    it('Cenário 3: pending', () => {
      cy.request({
        method: "post",
        url: "exams/image/patients/:patientId/pending",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 4: indications', () => {
      cy.request({
        method: "post",
        url: "exams/image/:examId/indications",
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
        url: "exams/image/suspend",
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
        url: "exams/image/printing-files",
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
        url: "exams/image/request",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
        body: {
          "codigoAtendimento": "<string>",
          "prioridade": 0,
          "dataProgramada": "<dateTime>",
          "recomendacoes": "<string>",
          "exames": [
            {
              "codigo": "<string>",
              "quantidade": "<integer>",
              "mme": "<string>",
              "lado": 4,
              "codigoIndicacao": "<string>",
              "contraste": "<boolean>",
              "sedacao": "<boolean>"
            },
            {
              "codigo": "<string>",
              "quantidade": "<integer>",
              "mme": "<string>",
              "lado": 1,
              "codigoIndicacao": "<string>",
              "contraste": "<boolean>",
              "sedacao": "<boolean>"
            }
          ]
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 8: results-file', () => {
      cy.request({
        method: "put",
        url: "exams/image/results/file",
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

    it('Cenário 9: report-review', () => {
      cy.request({
        method: "put",
        url: "exams/image/report/review",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
        body: {
          "codigoAtendimento": "<string>",
          "numeroGuia": "<string>",
          "codigoProcedimento": "<string>"
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

  })

})