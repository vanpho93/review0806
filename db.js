const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'NODE0806',
    password: 'khoapham',
    user: 'postgres',
    max: 10,
    idleTimeoutMillis: 1000
});

// pool.connect((err, client) => {
//     if (err) return console.log(err);
//     client.query('SELECT * FROM "Product"', (errQuery, result) => {
//         if (errQuery) return console.log(errQuery);
//         console.log(result);
//     });
// });

function queryDB(sql, cb) {
    pool.connect((err, client) => {
        if (err) return cb(err);
        client.query('SELECT * FROM "Product"', cb);
    });
}

queryDB('SELECT * FROM "Product"', (err, result) => {
    console.log(result.rows);
});
