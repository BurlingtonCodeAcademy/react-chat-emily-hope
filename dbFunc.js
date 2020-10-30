const DataStorage = require("./data.js");
//my DB URL
const url = "mongodb+srv://emilysaber:password1234@cluster0.yjuvt.mongodb.net/";
//****** EM FIGURE OUT HOW TO GET ENV PW IN HERE BEFORE SUBMITTING!!!!! */

//DB TO MAIN CHAT
let myMainChat = new DataStorage(url, "chatroom", "mainroom");

//DB TO CAT CHAT
let myCatChat = new DataStorage(url, "chatroom", "catchat");

/*
* Contact schema for both
{
    name: string.
    message:string
    date: date
}
*/

//db function to insert into the main chatrroom
const insertMessageMain = async (req, res) => {
  //create a date inserted
  let user = req.body.user;
  let date = new Date();

  //create a new message
  let newForm = {
    name: user.name,
    message: user.message,
    sent: date,
  };
  //insert into db pls
  let response = await myMainChat.chatInsert(newForm);

  //troubleshoot PLS REMOVE *****
  console.log(response);
  //if it work send over a 200/ OK STATUS
  if (response.status === "ok") {
    res.status(200).send(response.data);
  } else {
    //if it doesnt work send over a 400 and let us know what the error was pls
    res.status(400).send(response.error);
  }
};

//db function to insert into the cat chatroom
const insertMessageCat = async (req, res) => {
  //create a date inserted
  let user = req.body.user;
  let date = new Date();

  //create a new message
  let newForm = {
    name: user.name,
    message: user.message,
    sent: date,
  };
  //insert into db pls
  let response = await myCatChat.chatInsert(newForm);

  //troubleshoot PLS REMOVE *****
  console.log(response);
  //if it work send over a 200/ OK STATUS
  if (response.status === "ok") {
    res.status(200).send(response.data);
  } else {
    //if it doesnt work send over a 400 and let us know what the error was pls
    res.status(400).send(response.error);
  }
};

//get all messages from main chat room
const getAllMainMessages = async (req, res) => {
  //connect to DB for messages
  let response = await myMainChat.allChat();
  //troubleshoot PLS REMOVE *****
  console.log(response);
  //if it work send over a 200/ OK STATUS
  if (response.status === "ok") {
    res.status(200).send(response.data);
  } else {
    //if it doesnt work send over a 400 and let us know what the error was pls
    res.status(400).send(response.error);
  }
};

//get all messages from cat chat room
const getAllCatMessages = async (req, res) => {
  //connect to DB for messages
  let response = await myCatChat.allChat();
  //troubleshoot PLS REMOVE *****
  console.log(response);
  //if it work send over a 200/ OK STATUS
  if (response.status === "ok") {
    res.status(200).send(response.data);
  } else {
    //if it doesnt work send over a 400 and let us know what the error was pls
    res.status(400).send(response.error);
  }
};

//export to bring into server as DB function
module.exports = {
  insertMessageMain: insertMessageMain,
  insertMessageCat: insertMessageCat,
  getAllMainMessages: getAllMainMessages,
  getAllCatMessages: getAllCatMessages,
};
