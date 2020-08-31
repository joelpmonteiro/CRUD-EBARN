const webp = require('webp-converter');
// this will grant 755 permission to webp executables
webp.grant_permission();
var { promisify } = require('util');
var fs = require("fs");
var readFile = promisify(fs.readFile)
var base64Img = require('base64-img');
var path = require('path');
async function convertImgWebp(imagem) {
    var d = await readFile(`../uploads/${imagem}`, 'utf8')
    console.log(d);
    //await writeFile(`../uploads/${imagem}`, d, 'base64')

    // webp.cwebp("nodejs_logo.jpg", "nodejs_logo.webp", "-q 80");
    // result.then((response) => {
    //     console.log(response);
    // });
}

async function get_webpbase64(path2) {
    console.log(path2)
    let a = path.join(process.cwd(), 'uploads', `/${path2}`);
    console.log('let a: ', a);
    console.log('dirname: ', path.dirname(a));
    //console.log(path.join(process.cwd(), 'uploads', '/2f9ba3dd-edf4-42fa-b43c-4a7089f2652f.jpeg'));
    // let path1ole = path.dirname(`${__dirname}/utils/${__filename}`)
    // console.log(path1ole)
    // console.log(ole);
    // let path1 = './1cebc629-074c-45e7-af9a-7da6cf0fdac5.jpeg';
    var dados = await base64Img.base64(a, function (err, data) {
        if (err) {
            throw err;
        } else {
            //console.log(data)
            return data;
        }
    });
    console.log('dados;', dados)
    return dados;
}

module.exports = {
    convertImgWebp: convertImgWebp,
    get_webpbase64: get_webpbase64

}