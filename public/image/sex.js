exports.name = '/images/sex';
exports.index = async(req, res, next) => {
    try {
        //if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
        const sex = require('./data/json/sex.json');
        var isexge = sex[Math.floor(Math.random() * sex.length)].trim();
        res.jsonp({
            url: isexge,
            count: sex.length,
            author: 'Sen'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}