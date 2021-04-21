const pgcleint = require('../DB/connectDB');

exports.download = (req, res) => {

    pgcleint.query(`SELECT * FROM image WHERE _id=$1`, [req.params._id]).then(
        function (result) {

            // console.log(result.rows[0])

            const fileName = result.rows[0].name + '.' + result.rows[0].type;
            const directoryPath = result.rows[0].path;

            res.download(directoryPath, fileName, (err) => {
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

