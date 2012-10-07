/**
 * Created with JetBrains WebStorm.
 * User: mgadiya
 * Date: 10/7/12
 * Time: 12:36 PM
 * To change this template use File | Settings | File Templates.
 */
var http = require('http');

// starts the server and writes a sample response back.
function start(){
    function onServerCreation(request,response){
        response.writeHead(200,{"Content-Type" : "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onServerCreation).listen(8888);
    console.log('server has started');
}

exports.start = start;