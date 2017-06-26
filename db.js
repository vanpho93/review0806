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

function queryDB(sql, cb) {
    pool.connect((err, client) => {
        if (err) return cb(err);
        client.query(sql, cb);
    });
}

module.exports = queryDB;
