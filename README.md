## KPLC Bill Scraper

This is a scraper built with Puppeteer to fetch past electricity bills from the Kenya Power and Lighting Company (KPLC) website. I wrote a story about on how i built this [here](https://davidamunga.com/blog/reverse-engineering-the-kplc-api-using-puppeteer-for-fun) and why i built it [here](https://davidamunga.com/blog/how-i-built-an-electricity-bill-tracker-for-fun-and-not-profit).

### Usage

1. Clone the repo

```bash
git clone https://github.com/username/kplc-bill-scraper.git
```

2. Install Dependencies

```bash
npm install
```

3. Replace with your Meter No in `index.js`

```js
// INSERT METER NO Here
startScraping("YOUR_METER_NO");
```

4. Run the Script

```bash
node index.js
```

This will navigate to the `Bill/Meter Query` Page, key in your meter no , execute the query on the page and return the result on the network tab.

### Customizing

The scraper can be easily customized to change the meter no. You can also change the button id to choose Account No for Post Paid results in `index.js`

```bash
  // Radio Item Account No radio-1097
  // Radio Item Meter No radio-1098
  await page.click("#radio-1098");
```

## Troubleshooting

If the scraper does not return the results, update the code to fit the workflow by using the newly generated html element ids(if they change).

## Disclaimer

This project is for educational/testing purposes only. Use at your own risk.

This project is not affiliated with or endorsed by the Kenya Power and Lighting Company. The creators have no intention of causing harm or prejudice against KPLC. This is an independent project meant for learning purposes only.

## License

This project is licensed under the MIT License. See [LICENSE](https://github.com/DavidAmunga/kplc-bill-scraper/blob/main/LICENSE) for more details
