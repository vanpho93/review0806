const upload = require('../uploadConfig').single('image');
const queryDB = require('../db');

module.exports = (req, res) => {
    upload(req, res, err => {
        if (err) return res.send('LOI');
        const { name, desc, video, id, oldImage } = req.body;
        const image = req.file ? req.file.filename : oldImage;
        const sql = `UPDATE public."Product"
            SET name='${name}', "desc"='${desc}', image='${image}', video='${video}'
            WHERE id = ${id};`;
        queryDB(sql, (err, result) => {
            if (err) return res.send('LOI');
            res.redirect('/admin');
        });
    });
};
