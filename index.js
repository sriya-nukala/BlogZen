import express from "express";
import bodyParser from "body-parser";


const app=express();
const port=3000;


app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/about",(req,res)=>{
    res.render("about.ejs");
});

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});

app.post("/submit",(req,res)=>{
    var title=req.body.title;
    var author=req.body.author;
    var bcontent=req.body.blcontent;
    const freshblog={
        blogtitle: title,
        blogauthor: author,
        blogcontent: bcontent
    };
    res.render("index.ejs",{result:freshblog});

});

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});