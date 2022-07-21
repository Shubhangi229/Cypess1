const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wd2id7",
  env:{
    login_url : "https://rahulshettyacademy.com/angularpractice/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : 'cypress/integration/examples/*.js'
  },
});
