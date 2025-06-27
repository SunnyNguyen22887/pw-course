import { test } from '@playwright/test';

test('bài 1', async ({ page }) => {
    await test.step('visit web', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('click on register page', async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    })
    await test.step('Nhập user name', async () => {
        await page.locator("//input[@id='username']").fill("Luna")
    })
    await test.step('Nhập email', async () => {
        await page.locator("//input[@id='email']").pressSequentially("Luna.nguyen261991@gmail.com", { delay: 100 })
    })
    await test.step('Check giới tính', async () => {
        await page.locator("//input[@id='female']").check()
    })
    await test.step('Check hobby', async () => {
        await page.locator("//input[@id='cooking']").check()
    })
    await test.step('Select interest', async () => {
        await page.locator("//select[@id='interests']").selectOption('Sports')
    })
    await test.step('Select country', async () => {
        await page.locator("//select[@id='country']").click()
    })
    await test.step('Select country', async () => {
        await page.locator("//select[@id='country']").click()
        await page.locator("//select[@id='country']").selectOption('australia')
    })
    await test.step('Fill date of birth', async () => {
        await page.locator("//input[@id='dob']").fill('1991-04-12')
    })
    await test.step('Attach profile picture', async () => {
        await page.locator("//input[@id='profile']").setInputFiles("tests/images/profile-picture.jpg")
    })
    await test.step('Input Biography', async () => {
        await page.locator("//textarea[@id='bio']").fill('automation test k1104, wellcome to my class')
    })

    await test.step('Slider rating', async () => {
        const box = await page.locator("//input[@id='rating']").boundingBox();
        let x = (box.width * 8) / 10;
        let y = (box.height * 8) / 10;
        // { x: 515.59375, y: 442.875, width: 348.875, height: 36 }
        await page.locator("//input[@id='rating']").click({
            position: {
                x: x,
                y: y
            }
        })
    })
    await test.step('Input favorite color', async () => {
        await page.locator("//input[@id='favcolor']").fill("#08f724");
    })
    await test.step('Subcribe newsletter', async () => {
        await page.locator("//input[@id='newsletter']").check();
    })
    await test.step('Enable feature', async () => {
        await page.locator("//span[@class='slider round']").click();
    })
    await test.step('Star rating', async () => {
        const boxRate = await page.locator("//div[@id='starRating']").boundingBox();
        let x = (boxRate.width / 5) * 4;
        let y = (boxRate.height / 5) * 4;
        await page.locator("//div[@id='starRating']").click({
            position: {
                x: x,
                y: y
            }
        })
    })
    // await test.step('Fill Customer date', async () => {
    //     await page.locator("//input[@id='customDate']").waitFor();
    //     await page.locator("//input[@id='customDate']").fill('2025-06-26');
    // })
    await test.step('Click register button', async () => {
        await page.locator("//button[@type='submit']").click();
    })


})






