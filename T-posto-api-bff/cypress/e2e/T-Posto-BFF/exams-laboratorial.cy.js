/// <reference types="cypress" />

//const { get } = require("cypress/types/lodash")

describe('Cypress APIs', () => {

  let token = "bearer "
  before(function() {
    cy.login().then((response) => {
      token = token + response;
    })
  })

  context('T-POSTO BFF Exames Laboratoriais', () => {
    it('Cenário 1: exams', () => {
      cy.request({
        method: "get",
        url: "exams/laboratorial?codigoAtendimento=76583377&codigoPaciente=5321529",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 2: groups', { responseTimeout: 100000 }, () => {
      cy.request({
        method: "get",
        url: "exams/laboratorial/groups?codigoAtendimento=76583377&codigoPaciente=5321529",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });
    
    it('Cenário 3: last-creatinine-result', () => {
      cy.request({
        method: "post",
        url: "exams/laboratorial/attendances/:attendanceId/last-creatinine-result",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 4: results', () => {
      cy.request({
        method: "post",
        url: "exams/laboratorial/patients/:patientId/results",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 5: available-exams', () => {
      cy.request({
        method: "post",
        url: "exams/laboratorial/patients/:patientId/results/available-exams",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 6: pending-exams', () => {
      cy.request({
        method: "post",
        url: "exams/laboratorial/patients/:patientId/pending",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 7: suspend', () => {
      cy.request({
        method: "put",
        url: "exams/laboratorial/suspend",
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

    it('Cenário 8: results-file', () => {
      cy.request({
        method: "put",
        url: "exams/laboratorial/results/file",
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

    it('Cenário 9: request', () => {
      cy.request({
        method: "put",
        url: "exams/laboratorial/request",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
        body: {
          "codigoAtendimento": "<string>",
          "prioridade": 3,
          "dataProgramada": "<dateTime>",
          "recomendacoes": "<string>",
          "exames": [
            {
              "codigo": "<string>",
              "quantidade": "<integer>",
              "mme": "<string>",
              "complemento": "<string>"
            },
            {
              "codigo": "<string>",
              "quantidade": "<integer>",
              "mme": "<string>",
              "complemento": "<string>"
            }
          ]
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

    it('Cenário 10: printing-files', () => {
      cy.request({
        method: "put",
        url: "exams/laboratorial/printing-files",
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

    it('Cenário 11: results-comparative', () => {
      cy.request({
        method: "put",
        url: "exams/laboratorial/patients/:patientId/comparative/results",
        headers: {
          "Ocp-Apim-Subscription-Key": Cypress.env("bff-api-key"),
          "Authorization": token,
        },
        body: {
          "dataInicio": "<dateTime>",
          "dataFim": "<dateTime>",
          "exames": [
            "<string>",
            "<string>"
          ]
        }
      }).then((response) => {
        expect(response.status).to.equals(200);
        expect(response.body.notifications).to.be.empty;
      })
    });

  })

})