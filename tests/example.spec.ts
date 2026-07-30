import { test, expect } from '@playwright/test';

// Basic Playwright demo test for the Nova UI sample site.
// Run with: npx playwright test

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test('page loads with the correct title', async ({ page }) => {
  await expect(page).toHaveTitle('Nova UI');
  await expect(page.getByRole('heading', { name: /build a frontend that feels premium/i })).toBeVisible();
});

test('clicking "Launch demo" shows the demo banner', async ({ page }) => {
  const demoButton = page.getByRole('button', { name: 'Launch demo' });

  await expect(page.getByTestId('demo-banner')).toHaveCount(0);

  await demoButton.click();

  await expect(page.getByTestId('demo-banner')).toBeVisible();
  await expect(demoButton).toHaveText('Demo running');
});

test('clicking "Get started" increases active sessions', async ({ page }) => {
  const activeSessions = page.getByTestId('active-sessions');
  const before = await activeSessions.textContent();

  await page.getByRole('button', { name: 'Get started' }).click();

  await expect(activeSessions).not.toHaveText(before ?? '');
});

test('clicking "Duplicate section" updates the contact status text', async ({ page }) => {
  await page.getByRole('button', { name: 'Duplicate section' }).click();

  await expect(page.getByTestId('duplicate-status')).toHaveText('Section duplicated 1 time.');

  await page.getByRole('button', { name: 'Duplicate section' }).click();

  await expect(page.getByTestId('duplicate-status')).toHaveText('Section duplicated 2 times.');
});

