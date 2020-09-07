let http=require("http")
let fs=require("fs")


http.createServer((req,res)=>{

    // if(req.url=="/520.html"){
        //  res.setHeader("content-Type","text/html")
        fs.readFile(__dirname+"/req.url",(err,data)=>{
            // if(err){console.log(err)}
            res.end(data)
        })
       
    // } 
     if(req.url=="/520.css"){
        fs.readFile(__dirname+"/520.css",(err,data)=>{
            res.end(data)
        })
    } 
    if(req.url=="/img/flower.jpg"){
        fs.readFile(__dirname+"/img/flower.jpg",(err,data)=>{
            res.end(data)
        })
    }
     if(req.url=="/img/love.jpg"){
        fs.readFile(__dirname+"/img/love.jpg",(err,data)=>{
            res.end(data)
        })
    }
    if(req.url=="/img/3xin.png"){
        fs.readFile(__dirname+"/img/3xin.png",(err,data)=>{
            res.end(data)
        })
    }
    if(req.url=="/img/shuang.jpg"){
        fs.readFile(__dirname+"/img/shuang.jpg",(err,data)=>{
            res.end(data)
        })
    }
   
}).listen(9999)
console.log("已运行")