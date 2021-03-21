const chai = require('chai');
const fs = require('fs');
const chaiHttp = require('chai-http');

const app = require('../server');
const { upload } = require('../Controller/upload');

const { expect } = chai;

chai.use(chaiHttp);

describe('Test for upload', () => {

    // it('should return 201 and create user with single image upload', async() => {
    //     const res = await chai.request(app)
    //         .post('/users')
    //         .set('content-type', 'multipart/form-data')
    //         .field('email', 'myemail@gmail.com')
    //         .field('firstname', 'slim')
    //         .field('lastname', 'shady')
    //         .attach('image', fs.readFileSync(`${__dirname}/file.png`), 'tests/file.png')
    //         expect(res.status).to.equal(201);
    //         console.log('RES',res.body.data)
    // })

    //anoter post test
    it('should return 201 upload multiple image upload', async () => {
        const res = await chai.request(app)
            .post('/upload')
            .set('content-type', 'multipart/form-data')
            .attach('multi-image', fs.readFileSync(`${__dirname}/1616172372837.jpg`), 'test/1616172372837.jpg')
            .attach('multi-image', fs.readFileSync(`${__dirname}/food-menu-candidate.jpg`), 'test/food-menu-candidate.jpg')
            .attach('multi-image', fs.readFileSync(`${__dirname}/food.jpeg`), 'test/food.jpeg')
            .attach('multi-image', fs.readFileSync(`${__dirname}/foodheader.jpeg`), 'test/foodheader.jpeg')

        expect(res.status).to.equal(201);
        console.log('RES', res.body.data)
    })

})

