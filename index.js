import express from "express";
import bodyParser from "body-parser";


const app=express();
const port=3000;


app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.get("/",(req,res)=>{
    console.log("Opening.....");
    res.render("index.ejs");
});

// app.get("/about",(req,res)=>{
//     res.render("about.ejs");
// });

// app.get("/contact",(req,res)=>{
//     res.render("contact.ejs");
// });

// app.post("/submit",(req,res)=>{

// });

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});