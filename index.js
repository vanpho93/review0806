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
        console.log(sql);
        queryDB(sql, (err, result) => {
            if (err) return res.send('LOI');
            res.send('THANH CONG');
        });
    });
});
