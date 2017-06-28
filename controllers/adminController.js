const queryDB = require('../db');

module.exports = (req, res) => {
    queryDB('SELECT * FROM "Product"', (err, result) => {
        if (err) return res.send('LOI');
        res.render('admin', { arrProducts: result.rows });
    });
};
