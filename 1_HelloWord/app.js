// https://www.youtube.com/watch?v=tcQclvrf2dc&list=PLS1QulWo1RIb8IwHYfah5pxGU5jgNiEbK&index=5

// import in Java
var http = require("http");

/*
Method 1:
    - Create an anonymus function and assign it to a variable.
    - Than pass the created variable as argument in another function.
*/

/*

// Anonymus function
var foo = function(req, res) {
    
    // To sent response    
    res.end("Hello Node!!!\n");

};

// Pass the anonymus function
// http.createServer(foo).listen(8084); // 8084 is port here;

*/

/*
Method 2:
    - Create a anonymus function directly into the argument section.
*/

// Alternative
http.createServer(function(req, res) {    

    // Add a response code
    res.writeHead(200, {'content-type': 'text/plain'});

    // To sent response    
    res.end("Hello Node!!!\n");

}).listen(8084); // 8084 is port here

console.log("Server is running on 8084...");