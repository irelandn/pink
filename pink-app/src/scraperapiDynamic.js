const cheerio=require('cheerio');
const puppeteer=require('puppeteer');

 

let scraped_headlines= [];//where scraped data is stored

 

(async()=>{
  const browser=await puppeteer.launch();
  const page=await browser.newPage();

 

    try{
      await page.goto('https://www.ato.gov.au/Rates/Individual-income-tax-rates/', {timeout: 180000});
      let bodyHTML=await page.evaluate(()=> document.body.innerHTML);
      let $=cheerio.load(bodyHTML);
      let article_brackets=$('a[href*="/Rates/Individual-income-tax-rates"] > div')
      article_brackets.each((index,element)=>{
          title=$(element).find('Resident tax rates 2021–22').text()
          scraped_brackets.push({
            'title': title
          })
      });

 

      } catch(err) {
          console.log(err);
      }

 

      await browser.close();
    console.log(scraped_brackets)
})();