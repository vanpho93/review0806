const upload = require('../uploadConfig').single('image');
const Product = require('../models/Product');

module.exports = (req, res) => {
    upload(req, res, err => {
        if (err) return res.send('LOI');
        const { name, desc, video } = req.body;
        const image = req.file ? req.file.filename : 'aaa';
        const product = new Product(null, name, desc, image, video);
        product.add(err => {
            if(err) return res.send('LOI');
            res.redirect('/admin');
        });
    });
};
