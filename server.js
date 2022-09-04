//jshint esversion:6

const express = require("express");
const app = express();


//setting root directory with callback function
// "/" indicates routes that it responds to
app.get("/", function(req, res){
    //console.log(request);
    res.send("<h1>Hello World!</h1>");
});


app.get("/contact", function(req, res){
    res.send("contact me at: mndl.sudipta@gmail.com");

});

app.get("/about", function(req, res){
    res.send("This site is owned by sudipta mondal");

});

app.get("/hobbies", function(req, res){
    res.send("this is my hobbies")
})

//setting listen port with callback function
app.listen(3000, function(){
    console.log("server started on port 3000");
});