const Product = require('../models/Product');

module.exports = (req, res) => {
    const { id } = req.params;
    const product = new Product(id);
    product.remove(err => {
        if (err) return res.send('Xoa khong thanh cong');
        res.redirect('/admin');
    });
};
