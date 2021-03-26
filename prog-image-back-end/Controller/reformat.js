const sharp = require('sharp');
const pgcleint = require('../DB/connectDB');

exports.reformat = (req, res) => {


    let fileName = req.params.name;
    fileName = fileName.split(".")


    pgcleint.query(`SELECT path FROM image WHERE name=$1`, [fileName[0]]).then(

        function (result) {


            let originalPath = result.rows[0].path;
            let reformatPath = originalPath.split('.');
            reformatPath = reformatPath[0] + '.' + fileName[1];
            

            sharp(originalPath)
                .toFile(reformatPath), (info, err) => {
                    if (err) console.log(err)
                }

            res.download(reformatPath, req.params.name, (err) => {
                if (err) {
                    res.status(500).send({
                        message: "Could not download the file. " + err,
                    });
                }


                res.status(200).end()
            });


        }, function (err) {
            console.log(err)
        }
    )

}