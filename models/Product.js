const queryDB = require('../db');

class Product {
    constructor(id, name, desc, image, video) {
        this.name = name;
        this.desc = desc;
        this.image = image;
        this.video = video;
        this.id = id;
    }

    static getAll(cb) {
        const selectSql = 'SELECT * FROM "Product"';
        queryDB(selectSql, (err, result) => {
            if (err) return cb(err);
            cb(null, result.rows);
        }); 
    }

    add() {

    }

    remove() {

    }

    update() {

    }
}

module.exports = Product;
