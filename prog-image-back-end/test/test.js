const chai = require('chai');
const fs = require('fs');
const chaiHttp = require('chai-http');

const app = require('../server');
const { upload } = require('../Controller/upload');
const { doesNotMatch } = require('assert');

const { expect } = chai;

chai.use(chaiHttp);

describe('Test upload and download imag', () => {

    describe('Test for upload', () => {
        it('should return 200 and upload multiple image', async () => {
            const res = await chai.request(app)
                .post('/upload')
                .set('content-type', 'multipart/form-data')
                .attach('images', fs.readFileSync(`${__dirname}/1616172372837.jpg`), 'test/1616172372837.jpg')
                .attach('images', fs.readFileSync(`${__dirname}/food.jpeg`), 'test/food.jpeg')
                .attach('images', fs.readFileSync(`${__dirname}/foodheader.jpeg`), 'test/foodheader.jpeg')
                .attach('images', fs.readFileSync(`${__dirname}/GreekSalad.jpg`), 'test/GreekSalad.jpg')
                .attach('images', fs.readFileSync(`${__dirname}/header-1.jpg`), 'test/header-1.jpg')
                .attach('images', fs.readFileSync(`${__dirname}/header-2.jpg`), 'test/header-2.jpg')
                .attach('images', fs.readFileSync(`${__dirname}/peppers-445275_640.jpg`), 'test/peppers-445275_640.jpg')
                .attach('images', fs.readFileSync(`${__dirname}/pizza-435234_640.jpg`), 'test/pizza-435234_640.jpg')

            expect(res.status).to.equal(200);
            console.log('RES', res.body)
        })

    })

    // describe('Test for download', () => {

    //     const binaryParser = function (res, cb) {
    //         res.setEncoding("binary");
    //         res.data = "";
    //         res.on("data", function (chunk) {
    //           res.data += chunk;
    //         });
    //         res.on("end", function () {
    //           cb(null, new Buffer(res.data, "binary"));
    //         });
    //       };
    //       it("merp", function (done) {
    //         chai
    //           .request("http://localhost:8080/download/179")
    //           .get("1616172372837.jpg")
    //           .buffer()
    //           .parse(binaryParser)
    //           .end(function (err, res) {
    //             if (err) done(err);
          
    //             expect(res).to.have.status(200);
    //             expect(md5(res.body)).to.equal("fa7d7e650b2cec68f302b31ba28235d8");
          
    //             done();
    //           });
    //       });
        // it('shoul retuen 200 ', async () => {

        //     let image = ({ _id: '179' })
        //     const res = await chai.request(app)
        //         .get('/download' + image._id)

        //     expect(res.status).to.equal(200);





        // })
    // })


})
