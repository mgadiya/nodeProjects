 /**
 * Created with JetBrains WebStorm.
 * User: mgadiya
 * Date: 10/7/12
 * Time: 1:00 PM
 * To change this template use File | Settings | File Templates.
 */

 var schedule = function(timeout,callbackFunction){

     return {
         start: function(){
             setTimeout(callbackFunction,timeout)
         }

     };

 };

 (function(){
    var timeout = 1000;
    var count = 0;
    schedule(timeout,function doStuff(){
            console.log(++count);
            schedule(timeout,doStuff);
        }).start(timeout);

 })();