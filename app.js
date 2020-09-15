const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

var swprojects = [
    {name: "Wine Detective", image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Wish List", image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Algo Trader", image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Fantasy Analytics", image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=350"}
]

app.get("/swprojects", (req, res) => {
    
    res.render("swprojects",{swprojects:swprojects});
});

app.post("/swprojects", (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var newproject = {name: name, image: image}
    swprojects.push(newproject);
    res.redirect("/swprojects");
});

app.get("/swprojects/new", (req, res) => {
    res.render("new.ejs");
});


app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`My Personal Portfolio is Online ${process.env.IP}:${process.env.PORT}`);
});