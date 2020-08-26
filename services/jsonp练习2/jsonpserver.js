let http=require("http");


http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    let obj={
        name:"小明",
        age:18
    }
    // 调用客户端定义的jsonp函数，然后将json字符串作为实参进行传递
    res.end(`jsonp${JSON.stringify(obj)}`)
}).listen(8888);
console.log("sercer running")