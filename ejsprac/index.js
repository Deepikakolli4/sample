import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    const seconds = new Date().getSeconds();
    const data={
        title:"EJS Tags",
        second: seconds,
        items:["apple","banana","pine apple"],
        htmlContent:
        "<em>THIS IS SOME HTML CONTENT</em>",
    };
    res.render("index.ejs",data);
})
app.listen(port,()=>{
    console.log(`your port is running at ${port}`);
})