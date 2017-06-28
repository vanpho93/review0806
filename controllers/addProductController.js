const upload = require('../uploadConfig').single('image');
const queryDB = require('../db');

module.exports = (req, res) => {
    upload(req, res, err => {
        if (err) return res.send('LOI');
        const { name, desc, video } = req.body;
        const image = req.file.filename;
        const sql = `INSERT INTO public."Product"(name, "desc", image, video)
	    VALUES ('${name}', '${desc}', '${image}', '${video}');`;
        queryDB(sql, (err, result) => {
            if (err) return res.send('LOI');
            res.send('THANH CONG');
        });
    });
};
