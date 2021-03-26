const multer = require('multer');
const path = require('path');

const pgclient = require('../DB/connectDB');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        // console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

exports.upload = multer({ storage: storage }).array("images");

exports.imageInsert = (req, res, next) => {

    // console.log(req.files)

    for (let i = 0; i < req.files.length; i++) {

        //split nam and format originalname image
        let name = req.files[i].originalname.split('.');
        let type = req.files[i].mimetype.split('/');

        pgclient.query('INSERT INTO Image(Name,type,path) VALUES ($1,$2,$3)',
            [name[0], type[1], req.files[i].path]).then(


                res.status(200).end()

            ).catch(err => next(err));

    }

    console.log('Data Inserted')

};

