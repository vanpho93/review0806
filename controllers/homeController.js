const Product = require('../models/Product');

module.exports = (req, res) => {
    Product.getAll((err, arrProducts) => {
        if (err) return res.send('LOI');
        res.render('home', { arrProducts });
    });
};
