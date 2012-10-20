/**
 * Created with JetBrains WebStorm.
 * User: mgadiya
 * Date: 10/7/12
 * Time: 2:28 PM
 * To change this template use File | Settings | File Templates.
 */

function route(handle,pathName,response,request){
    console.log('About to begin processing of ' + pathName + ' request');
    if (typeof handle[pathName] == 'function'){
        handle[pathName](response,request);
    } else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
