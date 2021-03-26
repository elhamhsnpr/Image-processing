const {Pool} = require('pg');
const create = require('./createDB');

create();


const pool = new Pool({
    user: 'postgres',
    // host: 'localhost',
    host : 'pg',
    database: 'progimage',
    password: '972500',
    port: 5432,
});

pool.on('connect', () => {
   

    console.log('DB onnected ');
});


module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
};