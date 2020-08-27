let http=require("http");
let url=require("url");
let querystring=require("querystring");

http.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    let urlbody=url.parse(req.url);
    let querybody=url.parse(urlbody).query
    if(urlbody.pathname == "/test.jsonp"){
        let callbackname=querystring.parse(querybody).callback
        res.end(`${callbackname}("内容")`);
    }

}).listen(9999);
console.log("serving running")