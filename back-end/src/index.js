const app = require('./config/config');
const webp = require('webp-converter');
// this will grant 755 permission to webp executables
webp.grant_permission();
var { promisify } = require('util');
var fs = require("fs");
var base64Img = require('base64-img');



function get_webpbase64(path) {
    base64Img.base64('./uploads/16c72d80-73b8-4bc8-9db5-cc3db1976965.jpeg', function (err, data) {
        if (err) {
            throw err;
        } else {
            console.log(data);
        }
    })

}
//get_webpbase64();
app.listen(3000, () => console.log('API Running'))