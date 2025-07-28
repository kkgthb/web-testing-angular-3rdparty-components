import config from './playwright.config';
import { defineConfig } from '@playwright/test';

export default defineConfig(
  config,
  {
    testMatch: "**/*.component.spec.playwright.ts",
    use: {
      baseURL: process.env['STORYBOOK_BASE_URL'] || 'http://localhost:6006',
    },
    webServer: {
      command: 'npm run storybook',
      url: process.env['STORYBOOK_BASE_URL'] || 'http://localhost:6006',
      reuseExistingServer: !(process.env['CI']),
    },
  },
);