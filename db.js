const pg = require('pg');

const pool = new pg.Pool({
    host: 'ec2-107-22-162-158.compute-1.amazonaws.com',
    port: 5432,
    database: 'db69lmp0ur7kd6',
    password: 'bd1ad97333f8c5a2b20222c30bde770399365787b466d23fb8c49cd6e9255200',
    user: 'jvqaetvfkrblop',
    max: 20,
    idleTimeoutMillis: 1000,
    ssl: true
});

function queryDB(sql, cb) {
    pool.connect((err, client, done) => {
        if (err) return cb(err);
        client.query(sql, (errQuery, result) => {
            done(errQuery);
            cb(errQuery, result);
        });
    });
}

module.exports = queryDB;
