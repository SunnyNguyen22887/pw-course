import { test } from '@playwright/test';

test('bài 3', async ({ page }) => {
    await test.step('visit web', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('open Todo page', async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    })
    await test.step('Add 100 todo item', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo <${i}>`)
            await page.locator("//button[@id='add-task']").click();
        }

    })
    await test.step('Xóa todo có số lẻ', async () => {
        for (let i = 1; i <= 100; i += 2) {
            const deleteButton = page.locator(`//button[@id='todo-${i}--delete']`);
            if (await deleteButton.isVisible()){
                await page.once('dialog', dialog => dialog.accept());
                await deleteButton.click()
            }
       
            
        }
    })

})