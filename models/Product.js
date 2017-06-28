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

    add(cb) {
        const sql = `INSERT INTO public."Product"(name, "desc", image, video)
	    VALUES ('${this.name}', '${this.desc}', '${this.image}', '${this.video}');`;
        queryDB(sql, cb);
    }

    remove(cb) {
        const deleteSql = 'DELETE FROM "Product" WHERE id = ' + this.id;
        queryDB(deleteSql, cb);    
    }

    update(cb) {
        const sql = `UPDATE public."Product"
            SET name='${this.name}', "desc"='${this.desc}', image='${this.image}', video='${this.video}'
            WHERE id = ${this.id};`;
        queryDB(sql, cb);
    }
}

module.exports = Product;

// const product = new Product(11, 'DDDDDDD', 'BBB', '1.jpg', '123121231');
// product.update(err => console.log(err));
