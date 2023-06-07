const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://apimgmt-dev-001.azure-api.net/assistance/medicalrequests/bff/api/v1/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "env": {
      "bff-api-key": "c520e1beb16740d8ad8eb7470780383b",
      "t-posto-api-key": "e3dce78f86c54146810a111831fc5940"
   }
  },
});
