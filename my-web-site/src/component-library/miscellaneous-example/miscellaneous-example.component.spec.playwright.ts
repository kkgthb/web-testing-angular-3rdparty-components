import { test, expect } from '@playwright/test';
import { toId } from '@storybook/csf';

test.describe('hi', async () => {

    test('render props', async ({ page }) => {
        const storyId = toId('Component Library/Miscellaneous Example', 'Story 001');
        await page.goto(`/iframe.html?id=${storyId}`);
        await expect(page.locator('body')).toContainText('world');
    });
});

