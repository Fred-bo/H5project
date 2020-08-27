let http = require("http");
let url = require("url");
let querystring = require("querystring");


http.createServer((req, res) => {
    if (req.url != "/favicon.ico") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
        });
        console.log(req.url);

        let path = url.parse(req.url).pathname;
        let query = url.parse(req.url).query;
        let obj = querystring.parse(query);
        console.log(obj.username);
        console.log(obj["passwd"]);
        res.end("end");
    }
}).listen(8888);

console.log("servers is running");


// http.createServer((req, res) => {
//     // req.url中保存路径及参数
//     if (req.url != "/favicon.ico") {
//         res.writeHead(200, {
//             "Content-Type": "text/html; charset=utf-8",
//         });
//         console.log(req.url); //  /login?username=abc&passwd=111
//         // pathname获得路径 端口号之后到?之间的内容
//         // query 获得?之后的所有参数
//         let path = url.parse(req.url).pathname; //  /login
//         let query = url.parse(req.url).query; // username=abc&passwd=111

//         // 使用querystring模块解析每一个参数
//         let obj = querystring.parse(query); //{ username: 'abc', passwd: '111' }
//         console.log(obj.username); // abc
//         console.log(obj["passwd"]); // 111

//         // 结束响应并发送数据
//         res.end("hello");
//     }
// }).listen(8888);
// console.log("server is running");