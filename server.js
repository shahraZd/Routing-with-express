//----REQUIRES
const express = require("express");
const app = express();
const hbs = require("hbs");

//-----VARIABLES
let t = new Date().getHours();

app.use(express.static(__dirname+"/index"))
app.set("view engine", hbs);

//----GET
if (t < 8 || t > 17) app.get("*", (req, res) => res.render("error.hbs"));
else {


  app.get("/contact/:name", (req, res) => {
    res.render("contact.hbs", { name: req.params.name });
  });
}

//---LISTEN
app.listen(3000, err => {
  if (err) console.log("Sorry!... Our office is not open now");
  else console.log("Welcome to our office <3");
});
