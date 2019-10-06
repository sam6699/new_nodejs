let rss = require('./RSSConnector');
 function getTitles(callback) {
            let titles = '<ol>';
                rss(function () {
                for (let j=0;j<this.length;j++){
                    titles+=`<li>${this[j].title[0]}</li>`;
                }
                    titles+='</ol>';
                    callback.call(titles);
                });
 }
module.exports=getTitles;