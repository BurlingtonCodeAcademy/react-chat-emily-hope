//import and set up
const dbFunc = require("./dbFunc");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";
require("dotenv").config();

//bind directory
app.use(express.static(staticDir));
// middleware for post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//creating Db variable for main room
app.get("/mainchat", dbFunc.getAllMainMessages)

//post route for main room
app.post("/mainchat/", dbFunc.insertMessageMain)

//creating Db variable for cat chat
app.get("/catchat", dbFunc.getAllCatMessages)

//post route for cat chat
app.post("/catchat", dbFunc.insertMessageCat)


app.listen(port, () => {
  console.log("listening on port: " + port);
});


