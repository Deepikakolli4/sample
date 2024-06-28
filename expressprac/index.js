import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    //get the resource;
   res.send("<h1>HELLO PAGE</h1>");
})
app.post("/register",(req,res)=>{
    //sending resource
    res.send(201);
 })
 app.put("/user/tom",(req,res)=>{
    //replacing the complete resource with new resource
    res.sendStatus(200);
 })
 app.patch("/user/tom",(req,res)=>{
    //replacing only the damaged or useless resource with new resource
    res.send(200);
 })
 app.delete("/user/tom",(req,res)=>{
    //deleting the entire resource
    res.send(200);
 })
app.listen(port,()=>{
    console.log(`your server is running at ${port}`);
})