const express = require('express');
const queryDB = require('./db');
const upload = require('./uploadConfig').single('image');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => {
    queryDB('SELECT * FROM "Product"', (err, result) => {
        if (err) return res.send('LOI');
        res.render('home', { arrProducts: result.rows });
    });
});

app.get('/addProduct', (req, res) => {
    res.render('add');
});

app.post('/addProduct', (req, res) => {
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
});

app.get('/admin', (req, res) => {
    queryDB('SELECT * FROM "Product"', (err, result) => {
        if (err) return res.send('LOI');
        res.render('admin', { arrProducts: result.rows });
    });
});

app.get('/xoa/:id', (req, res) => {
    const { id } = req.params;
    const deleteSql = 'DELETE FROM "Product" WHERE id = ' + id;
    queryDB(deleteSql, (err, result) => {
        if (err) return res.send('Xoa khong thanh cong');
        res.redirect('/admin');
    });
});

app.get('/sua/:id', (req, res) => {
    const { id } = req.params;
    const selectSql = 'SELECT * FROM "Product" WHERE id = ' + id;
    queryDB(selectSql, (err, result) => {
        if (err || result.rows.length === 0) return res.send('SAN PHAM KHONG TON TAI');
        res.render('update', { product: result.rows[0] });
    });
});

app.post('/update', (req, res) => {
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
});
