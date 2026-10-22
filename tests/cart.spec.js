const { test, expect } = require('@playwright/test');

test.describe('Demoblaze: добавление товара в корзину', () => {
  test('Samsung galaxy s6 добавляется в корзину и отображается в Cart', async ({ page }) => {
    // 1. Открыть страницу https://www.demoblaze.com/
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle(/STORE/);

    // 2. Нажать на товар "Samsung galaxy s6"
    await page.click('.card-title:has-text("Samsung galaxy s6")');
    await page.waitForURL(/prod\.html\?idp_=/);

    // 3. На странице товара нажать "Add to cart"
    // 4. Нажать "OK" в pop-up (alert "Product added")
    page.once('dialog', (dialog) => {
      expect(dialog.message()).toContain('Product added');
      dialog.accept();
    });
    await page.click('a:has-text("Add to cart")');
    await page.waitForEvent('dialog');

    // 5. Нажать кнопку "Cart" в шапке сайта
    await page.click('#cartur');

    // Ожидаемый результат: в корзине единственный элемент "Samsung galaxy s6"
    const rows = page.locator('#tbodyid tr');
    await expect(rows).toHaveCount(1);
    await expect(rows.first().locator('td:nth-child(2)')).toHaveText('Samsung galaxy s6');
  });
});
