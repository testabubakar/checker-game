const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.gamesforthebrain.com/game/checkers',
    specPattern: 'cypress/e2e/**/*.test.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
  },
  });
