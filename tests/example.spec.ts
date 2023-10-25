import {expect, test} from "@playwright/test";

test('Custom Filter: Selected Filters Area', async ({page}) => {
  await page.goto('./');
  await page.locator('_react=LdButton').click();
  await page.locator('_react=LdSelect').click();
  let test = await page.locator('_react=LdSelect')
      .locator("_react=LdOption")
      .nth(0)
      .click();
});
