import express from "express";
const app = express();
const port = 3000;
import bodyParser from "body-parser";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/",(req,res)=> {


    res.render("home.ejs");
});



app.listen(port,()=>{

    console.log("server is running on port 3000");
})