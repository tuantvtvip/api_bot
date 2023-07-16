exports.name = '/image/ma';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const ma = require('./data/json/ma.json');
        var image = ma[Math.floor(Math.random() * ma.length)].trim();
        res.jsonp({
            url: image,
            count: ma.length,
            author: 'MạnhG'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}