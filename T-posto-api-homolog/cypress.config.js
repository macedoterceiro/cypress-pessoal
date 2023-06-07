const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://apimgmt-hml-001.azure-api.net/tpostomap/api/v1/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "env": {
      "t-posto-api-key-dev": "e3dce78f86c54146810a111831fc5940",
      "Bff-api-key-dev": "c520e1beb16740d8ad8eb7470780383b",
      "base-url-t-posto-dev": "https://apimgmt-dev-001.azure-api.net/tpostomap/api/v1/",
      "base-url-bff-dev": "https://apimgmt-dev-001.azure-api.net/assistance/medicalrequests/bff/api/v1/",
      "t-posto-api-key": "54e6aa624ada485698a0406f25d736e4"
   }
  },
});
