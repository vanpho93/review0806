const queryDB = require('../db');

module.exports = (req, res) => {
    const { id } = req.params;
    const deleteSql = 'DELETE FROM "Product" WHERE id = ' + id;
    queryDB(deleteSql, (err, result) => {
        if (err) return res.send('Xoa khong thanh cong');
        res.redirect('/admin');
    });
};
