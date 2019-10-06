const https = require('https');
const xml = require('xml2js');
const parser = new xml.Parser({attrkey:'ATTR'});

function getNews(callback){
        let data = '';
         https.get('https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en', (resp) => {
            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                parser.parseString(data, function (error, result) {
                        callback.call(result.rss.channel[0].item);
                });
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
}

module.exports=getNews;
