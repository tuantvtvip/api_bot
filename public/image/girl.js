exports.name = '/images/girl';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const girl = require('./data/json/girl.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        res.jsonp({
            url: image,
            count: girl.length,
            author: 'MạnhG'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}