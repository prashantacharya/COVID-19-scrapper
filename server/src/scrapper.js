const puppeteer = require('puppeteer');

const scrapper = async (country) => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	const url = `https://www.worldometers.info/coronavirus/country/${country}/`;

	await page.goto(url);
	const allStats = await page.evaluate(() => {
		const stats = {
			totalCases: +document.querySelectorAll('.maincounter-number span')[0]
				.innerText,
			deaths: +document.querySelectorAll('.maincounter-number span')[1]
				.innerText,
			recovered: +document.querySelectorAll('.maincounter-number span')[2]
				.innerText,
		};

		return stats;
	});

	await browser.close();

	return allStats;
};

module.exports = scrapper;
