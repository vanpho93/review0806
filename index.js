const express = require('express');
// const queryDB = require('./db');
// const upload = require('./uploadConfig').single('image');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(process.env.PORT || 3000, () => console.log('Server started'));

// app.get('/', require('./controllers/homeController'));
// app.get('/addProduct', (req, res) => res.render('add'));
// app.post('/addProduct', require('./controllers/addProductController'));
// app.get('/admin', require('./controllers/adminController'));
// app.get('/xoa/:id', require('./controllers/removeController'));
// app.get('/sua/:id', require('./controllers/updateViewController'));
// app.post('/update', require('./controllers/updateController'));
app.get('/', (req, res) => res.send('server is running'));
