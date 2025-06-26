import { test } from '@playwright/test';

test('bài 2', async ({ page }) => {
    await test.step('visit web', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('open product page', async () => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    })
    await test.step('Add 2 product 1 to cart', async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();
    })
    await test.step('Add 3 product 2 to cart', async () => {
        await page.locator("//button[@data-product-id='2']").click({
            clickCount: 3
        });
    })
    await test.step('Add 1 product 3 to cart', async () => {
        await page.locator("//button[@data-product-id='3']").click();
    })


})