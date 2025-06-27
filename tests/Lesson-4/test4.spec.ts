import { test } from '@playwright/test';

test('Bài 4', async ({ page }) => {
    await test.step('visit vnexpress page', async () => {
        await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe")
    })
    await test.step('Add 10 notes', async () => {
        let dataArray = [{ titleArticle: "", contentArticle: "" }];
        let titles = await page.locator("//h3[@class='title-news']/child::a").allTextContents();
        let contents = await page.locator("//p[@class='description']/child::a").allTextContents();

        if (titles.length < 10 || contents.length < 10) {
            console.log("Có it hơn 10 bài viết")
        } else {
            for (let i = 0; i < 10; i++) {
                dataArray.push({
                    titleArticle: titles[i],
                    contentArticle: contents[i]
                })
            }
        }
        console.log(dataArray);
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
        for (let i = 0; i < dataArray.length; i++) {
            await page.locator("//input[@id='note-title']").fill(dataArray[i].titleArticle)
            await page.locator("//textarea[@id='note-content']").fill(dataArray[i].contentArticle)
            await page.locator("//button[@id='add-note']").click();
        }

    })

})
test('Search', async ({ page }) => {
    await test.step('search', async () => {
       
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        const randomTitle = dataArray[randomIndex].titleArticle
        console.log(randomTitle);
        await page.locator("//input[@id='search']").fill(randomTitle);
    })
})
    