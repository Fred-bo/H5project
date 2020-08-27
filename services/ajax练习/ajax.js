let http=require("http")
let url= require("url");
let querystring=require("querystring")

http.createServer((req,res)=>{
    res.setHeader( 'Access-Control-Allow-Origin',"*")
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    let path = url.parse(req.url).pathname;
    let querybody=querystring.parse(url.parse(req.url).query)
    console.log("path---", path)
    
    if(path=="/test.jsonp"){
        // res.end(JSON.stringify({name:"小明"}))
        console.log("aa")
        res.end(JSON.stringify({name: querybody.name, age: querybody.age}))
        
    }

    if(path=="/post"){
        if(req.method=="POST"){
            req.on("data",function(result){
                console.log(JSON.parse(result))
            })
        }
        res.end("ok");
    }

}).listen(9999)
console.log("server running at9999")