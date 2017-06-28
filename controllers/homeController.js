const queryDB = require('../db');

module.exports = (req, res) => {
    queryDB('SELECT * FROM "Product"', (err, result) => {
        if (err) return res.send('LOI');
        res.render('home', { arrProducts: result.rows });
    });
};
