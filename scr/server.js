const http = require("http");
const fs = require("fs");
const { error } = require("console");


const server = http.createServer((req,res)=>{
    if(req.url === "/home"){
        fs.readFile("home.html","utf-8",(error,data)=>{
            if(error){
                res.end("Something went wrong");
            }else{
                res.end(data);
            }
        })
    }else if(req.url === "about"){
        fs.readFile("About.html","utf-8",(error,data)=>{
            if(error){
                res.end("Something went wrong");
            }else{
                res.end(data);
            }
        })
    }else if(req.url === "/resume"){
        fs.readFile("resume.html","utf-8",(error,data)=>{
            if(error){
                res.end("Something went wrong");
            }else{
                res.end(data);
            }
        })
    }else if(req.url === "/projects"){
        fs.readFile("projects.html","utf-8",(error,data)=>{
            if(error){
                res.end("Something went wrong");
            }else{
                res.end(data);
            }
        })
    }else if(req.url === "/contact"){
        fs.readFile("contact.html","utf-8",(error,data)=>{
            if(error){
                res.end("Something went wrong");
            }else{
                res.end(data);
            }
        })
    }else if(req.url === "/message"){[
        fs.readFile("message.html","utf-8",(error,data)=>{
            if(error){
                res.end("Something went wrong");
            }else{
                res.end(data);
            }
        })
    ]}
    else{
        res.end("Invalid url")
    }
})

server.listen(5656,()=>{
    console.log("server started");
});