/**
 * Created with JetBrains WebStorm.
 * User: mgadiya
 * Date: 10/7/12
 * Time: 2:42 PM
 * To change this template use File | Settings | File Templates.
 */

var exec = require('child_process').exec;
var fs = require('fs'),
    formidable = require('formidable'),
    querystring = require('querystring');

function start(response,postData){
    console.log('Request handler for start was called');

    //callback for exec
//    var startCB = function startCallback(error,stdout,stderr){
//        if (error == null){
//            console.log('Inside start request callback');
//            response.writeHead(200,{"Content-Type": "text/plain"});
//            response.write(stdout);
//            response.end();
//        }else{
//            response.writeHead(500,{"Content-Type": "text/plain"});
//            response.write(' Internal Server Error: ' + error);
//            response.end();
//        }
//    }
//    exec("find *.js",{ timeout: 10000, maxBuffer: 20000*1024 },startCB);

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="upload" multiple="multiple">'+
        '<input type="submit" value="Upload File" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response,postData){
    console.log('Request handler for upload was called');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You sent: " + querystring.parse(postData).text);
    response.end();
}


function show(response, postData) {
    console.log("Request handler 'show' was called.");
    fs.readFile("/tmp/actual.png", "binary", function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.show = show;