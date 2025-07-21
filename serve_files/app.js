import express from "express";
import path  from "path"
const app =  express(); 
let __dirname  = import.meta.dirname;
let  mainPath =  path.join(__dirname,"public")
const filesData = new express.static(mainPath)
app.use(filesData);
app.get("/",(req,res)=>{
    if(req.url === "/"){
        res.sendFile(`filesData`)
    }
})
let PORT = 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
