let http=require("http");

let server = http.createServer((req,res)=>{
    if(req.url!="/favicon.ico"){
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.write("hello nodejs 你好世界000");
        res.write("aaaaa");
        res.end();
    }
})

server.listen(8888);
console.log("server running")