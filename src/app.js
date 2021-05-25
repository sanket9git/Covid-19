const express = require("express");
const path = require("path"); 
const hbs =require("hbs");
const app = express();
const port = process.env.PORT || 8000;
// public static path
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
 const partials_path = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partials_path);
app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
    });

    app.get("/corona",(req,res)=>{
        res.render("corona");


      });

     

        app.get("*",(req,res)=>{
            res.render("error", {
                msg:"OOPS page not found"
            });         
           });

app.listen(port , ()=> {
    console.log(`listening port ${port}`);
});
