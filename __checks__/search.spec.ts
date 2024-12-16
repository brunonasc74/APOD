import { test, expect } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config();
const url = process.env.ENVIROMENT_URL || 'https://brunonasc74.github.io/APOD/';

test('test', async ({ page }) => {
  await page.goto(url);
  await page.locator('#date').fill('2002-02-02');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.locator('#title')).toContainText('Centaurus A: The Galaxy Deep Inside');
});