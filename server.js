//import and set up
require("dotenv").config();
const express = require("express");
const path = require("path");

const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

//bind directory
app.use(express.static(staticDir));
// middleware for post
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("listening on port: " + port);
});

//database integration
const Data = require("/.data.js")

//creating Db variable for main room

//post route for main room

//creating Db variable for cat chat

//post room for cat chat

//etc