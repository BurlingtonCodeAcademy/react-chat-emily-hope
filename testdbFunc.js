const DataStorage = require("./data.js");
const url = "mongodb+srv://emilysaber:password1234@cluster0.yjuvt.mongodb.net/";

let myMainChat = new DataStorage(url, "chatroom", "mainroom");
let myCatChat = new DataStorage(url, "chatroom", "catchat");

/*
* Contact schema for both
{
    name: string.
    message:string
    date: date
}
*/

const insertMessageMain = async (form) => {
  let date = new Date();
  let newForm = {
    name: form.name,
    message: form.message,
    sent: date,
  };
  let response = await myMainChat.chatInsert(newForm);
  console.log(response);
};

insertMessageMain({
  name: "hope",
  message: "this is hope",
});

const insertMessageCat = async (form) => {
      let date = new Date();
      let newForm = {
        name: form.name,
        message: form.message,
        sent: date,
      };
      let response = await myCatChat.chatInsert(newForm);
      console.log(response);
    };

insertMessageCat({
      name: "NOT A CAT",
      message: "DEF NOT A CAT"
})