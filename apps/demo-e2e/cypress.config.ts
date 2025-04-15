import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src/e2e',
      webServerCommands: {
        default: 'npx nx run demo:serve',
        production: 'npx nx run demo:serve:production',
      },
      ciWebServerCommand: 'npx nx run demo:serve-static',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4200',
    specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'src/support/e2e.ts',
    fixturesFolder: 'src/fixtures',
    video: true,
    screenshotOn: true,
  },
});
