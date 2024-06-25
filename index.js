
console.log("Heelooo");
const fs=require("fs");
const content = 'hello!';

// fs.writeFile('a.txt', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("successful");
//   }
// });
fs.readFile('a.txt', 'utf8', (err, data) => {
    let data1="From Node JS";
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
=======
import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{
   res.send("<h1>HELLO PAGE</h1>");
})
app.get("/about",(req,res)=>{
    res.send("<h1>ABOUT PAGE</h1>");
 })
app.listen(port,()=>{
    console.log(`your server is running at ${port}`);
})

