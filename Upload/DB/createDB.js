//create Postgres DB and Table
const { Pool } = require('pg');
const pgtools = require('pgtools');
const async = require('async');



async function create() {
    await createDatabse();
    await createTable();
}

// create progImage DB

function createDatabse() {
    const config = {
        user: "postgres",
        host: "localhost",
        // host: "pg",
        password: "972500",
        port: 5432
    };

    pgtools.createdb(config, "progImage").then(
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
    host: 'localhost',
    database: 'progImage',
    password: '972500',
    port: 5432,
});

pool.on('connect', () => {
    console.log('DB Connected');
})

function createTable() {
    let query = `CREATE TABLE IF NOT EXISTS Image (
        _id SERIAL PRIMARY KEY ,         
        Name VARCHAR(45) ,
        Type VARCHAR(45) 
       );`;
    pool.query(query).then(

        function (res) {
            console.log('Image Table Created');
        }, function (err) {
            console.log('err:', err.name);
        });

}

function f() {
    try {
        create();
    } catch (e) {
        console.log(e);
    }
}

f();