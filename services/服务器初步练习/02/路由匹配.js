let http = require("http");
let url = require("url")

let router=require("../js/router");

const { login } = require("c:/users/dell/desktop/02/js/router");

console.log(router[login])

http.createServer((req,res)=>{
    if(req.url!="/favicon.ico"){
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        let path =url.parse(req.url).pathname;
        if(path==="/"){
            router.home(req,res)
        }else{
            router[path.substring(1)](req,res)
        }
    }
}).listen(8888)
console.log("sercer is running at 8888");