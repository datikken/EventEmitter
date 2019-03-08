const request = require('request');
const cheerio = require('cheerio');

request('http://spb.1000bankov.ru/kurs', (err, res, html) => {
    if(!err && res.statusCode === 200) {
        const $ = cheerio.load(html);

        console.log($('.bnkurs').text());
    }
})