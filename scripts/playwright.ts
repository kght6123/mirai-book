import playwright from 'playwright-core';

// 
// 起動コマンド
// npx vite-node@latest ./scripts/playwright.ts
// 

playwright.chromium.launch({channel: 'chrome', headless: false}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.waitForTimeout(3000);
  await browser.close();
});
