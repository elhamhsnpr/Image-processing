//create Postgres DB and Table
const { Pool } = require('pg');
const pgtools = require('pgtools');
const async = require('async');



async function create() {
    await createDatabse();
    await createTable();
}

// create progImage DB

async function createDatabse() {
    const config = {
        user: "postgres",
        // host: "localhost",
        host: "pg",
        password: "972500",
        port: 5432
    };

    await pgtools.createdb(config, "progimage").then(
        function (res) {
            console.log("progImage Created' ");

        }, function (err) {
            console.log("err DB", err.name)
        }
    )

}


//Create Tabel 

const pool = new Pool({
    user: 'postgres',
    // host: 'localhost',
    host: 'pg',
    database: 'progimage',
    password: '972500',
    port: 5432,
});

pool.on('connect', () => {
    console.log('DB Connected');
})

async function createTable() {
    let query = `CREATE TABLE IF NOT EXISTS Image (
        _id SERIAL PRIMARY KEY ,         
        Name VARCHAR(45) ,
        Type VARCHAR(45) ,
        path VARCHAR(45) 
       );`;
    await pool.query(query).then(

        function (res) {
            console.log('Image Table Created');
        }, function (err) {
            console.log('err:', err.name);
        });

}


module.exports= create;