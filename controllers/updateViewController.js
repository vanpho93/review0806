const queryDB = require('../db');

module.exports = (req, res) => {
    const { id } = req.params;
    const selectSql = 'SELECT * FROM "Product" WHERE id = ' + id;
    queryDB(selectSql, (err, result) => {
        if (err || result.rows.length === 0) return res.send('SAN PHAM KHONG TON TAI');
        res.render('update', { product: result.rows[0] });
    });
};
