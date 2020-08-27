let http = require("http");
let url = require("url");
let querystring = require("querystring");

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    let urlbody = url.parse(req.url);
    let path = urlbody.pathname;
    let querybody = querystring.parse(urlbody.query)
    if (path == "/test.jsonp") {
        
        res.end(`${querybody.callback}({ name:"小明",age:18})`)
        
    }
    // 调用客户端定义的jsonp函数，然后将json字符串作为实参进行传递

}).listen(8888);
console.log("sercer running")