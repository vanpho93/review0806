const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(3000, () => console.log('Server started'));
app.get('/', (req, res) => {
    //truy van database lay ra tat ca cac san pham
    
});
