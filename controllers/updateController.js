const upload = require('../uploadConfig').single('image');
const Product = require('../models/Product');

module.exports = (req, res) => {
    upload(req, res, err => {
        if (err) return res.send('LOI');
        const { name, desc, video, id, oldImage } = req.body;
        const image = req.file ? req.file.filename : oldImage;
        const product = new Product(id, name, desc, image, video);
        product.update(err => {
            if (err) return res.send('LOI');
            res.redirect('/admin');
        });
    });
};
