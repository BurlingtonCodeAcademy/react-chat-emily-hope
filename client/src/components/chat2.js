import React, { useState, useEffect } from "react";
import "./App.css";

function ChatTwo() {
  const [chat, setChat] = useState("");

  //function to fetch from the path set up on our server
  const loadMessages = () => {
    fetch("/catchat")
      .then((response) => response.json())
      .then((message) => {
        setChat(message);
      });
  };

  //hook
  useEffect(() => {
    //call that function that fetches and present us with the messages
    loadMessages();
    //create a function that re loads every 10 seconds
    const intervalId = setInterval(() => {
      loadMessages();
    }, 10000);
    //have react clean up the interval and reset it each time
    return () => clearInterval(intervalId);
  }, []);

  //if chat is not a null value than map through this information if so.... otherwise please present us with loading data
  return (
    <div>
      <body class="body">
        <h1 class="chat-title">Welcome to the Cat Chat</h1>
        <div class="chatDisplay">
          <p class="chatParagraph">
            {chat ? (
              chat.map((chat) => (
                <p>
                  <b>{chat.name}:</b> {chat.message}
                  <br></br>
                  <p id="message sent">
                    <i>message sent: {chat.sent.slice(0, 10)}</i>
                  </p>
                </p>
              ))
            ) : (
              <p>LOADING CHAT!</p>
            )}
          </p>
        </div>
        {/* form to submit chats */}
        <form method="POST" action="/catchat">
          <div class="form">
            <input
              class="usernameInput"
              name="username"
              type="text"
              placeholder="username"
              required
            />
            <div class="textBox">
              <textarea
                name="messageInput"
                class="text"
                type="text"
                placeholder="Type Message Here"
                required
              />
              <input type="submit" value="send" class="buttons" />
            </div>
          </div>
        </form>
        <form>
          <input id="refresh" type="submit" value="refresh" class="buttons" />
        </form>
      </body>
    </div>
  );
}

export default ChatTwo;
