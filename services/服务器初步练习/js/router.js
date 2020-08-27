let fs=require("fs")

function getData(path,res){
    fs.readFile(`./html/${path}.html`,(err,data)=>{
        if(err) console.log(err);
        res.end(data);
    })
}

module.exports={
    login:function(req,res){
        console.log("登录");
        getData("login",res)
    },

    register:function(req,res){
        console.log("注册",res)
        getData("register",res)
    },
    home:function(req,res){
        console.log("主页",res)
        getData("home",res)
    }
}