/**
 * Created with JetBrains WebStorm.
 * User: mgadiya
 * Date: 10/7/12
 * Time: 12:36 PM
 * To change this template use File | Settings | File Templates.
 */
var formidable = require('formidable'),
    http = require('http'),
     url = require('url');

// starts the server and writes a sample response back.
function start(route,handle){
    function onServerCreation(request,response){

        var pathName = url.parse(request.url).pathname;
        console.log('Request for ' + pathName + ' Received');
        route(handle, pathName, response, request);

    }
    http.createServer(onServerCreation).listen(8888);
    console.log('server has started');
}

exports.start = start;