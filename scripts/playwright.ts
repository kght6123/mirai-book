import playwright from 'playwright-core';

// 
// 起動コマンド
// npx vite-node@latest ./scripts/playwright.ts [screen|print|pdf]
// 

const screen = () => {
	// Webページ版を表示する
	playwright.chromium.launch({channel: 'chrome', headless: false}).then(async browser => {
		const page = await browser.newPage();
		await page.goto('http://localhost:4321/');
		await page.emulateMedia({ media: "screen" });
		console.log("Ctrl+C to exit");
		// Ctrl+Cで終了させる場合のクリーンアップ処理
    process.on('SIGINT', async () => {
      await browser.close();
      process.exit();
    });
	});
};

const print = () => {
	// 印刷のプレビュー（media: print）を表示する
	playwright.chromium.launch({channel: 'chrome', headless: false}).then(async browser => {
		const page = await browser.newPage();
		await page.goto('http://localhost:4321/');
		await page.emulateMedia({ media: "print" });
		console.log("Ctrl+C to exit");
		// Ctrl+Cで終了させる場合のクリーンアップ処理
    process.on('SIGINT', async () => {
      await browser.close();
      process.exit();
    });
	});
};

const downloadPDF = () => {
	// PDFでダウンロードする
	playwright.chromium.launch({channel: 'chrome', headless: false}).then(async browser => {
		const page = await browser.newPage();
		await page.goto('http://localhost:4321/');
		await page.emulateMedia({ media: "print" });
		await page.pdf({ path: "./print.pdf", width: "182mm", height: "257mm", printBackground: true, margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" } });
		await browser.close();
	});
};

// 起動パラメータで処理を分岐する
const args = process.argv.slice(2);
if (args.length === 0) {
	console.log("No arguments provided.");
	process.exit(1);
}
const command = args[0];
switch (command) {
	case "screen":
		screen();
		break;
	case "print":
		print();
		break;
	case "pdf":
		downloadPDF();
		break;
	default:
		console.log("Invalid argument.");
		process.exit(1);
}

