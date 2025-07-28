import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src",
  testMatch: "**/*.e2e.playwright.ts",
  fullyParallel: true,
  reporter: [["list"], ["html"], ['junit', { outputFile: 'test-results/junit.xml' }]],
  use: {
    baseURL: process.env['WEBAPP_BASE_URL'] || 'http://localhost:4200',
    trace: "off",
    video: "off",
    screenshot: "off",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 13'],
    //   },
    // },
  ],
  // webServer: !(process.env['WEBAPP_BASE_URL']) ? {
  //   command: 'npm run start',
  //   url: process.env['WEBAPP_BASE_URL'] || 'http://localhost:4200',
  //   reuseExistingServer: !(process.env['CI']),
  //   env: {
  //     PORT: '4200'
  //   }
  // } : undefined,
});
