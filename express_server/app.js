import express from "express";
const app =  express(); 
app.get("/",(req,res)=>{
    if(req.url === "/"){
        res.send("<h1> hello World!</h1>")
    }
})
app.get("/about",(req,res)=>{
        if(req.url === "/about"){
            res.send("<h1> The is ABOUT PAGE </h1>")
        }
})
app.get("/contact",(req,res)=>{
        if(req.url === "/contact"){
            res.send("<h1> The is contact PAGE </h1>")
        }
})
let PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


