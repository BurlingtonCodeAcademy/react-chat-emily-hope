import React, { useState, useEffect } from "react";
import "./App.css";

function ChatTwo() {
  const [chat, setChat] = useState("");

  const loadMessages = () => {
    fetch("/catchat")
      .then((response) => response.json())
      .then((message) => {
        setChat(message);
      });
  }

  //hook to grab our messages from our mainchat database and set them as chat
  useEffect(() => {
   loadMessages()
   const intervalId = setInterval(() => {
    loadMessages()
  }, 10000);
  return () => clearInterval(intervalId)
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
                  {chat.name}: {chat.message}
                  <br></br>
                  <p id="message sent">
                    message sent: {chat.sent.slice(11, 16)}
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
          <div class='form'>
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
          <input id='refresh' type="submit" value="refresh" class="buttons" />
        </form>
      </body>
    </div>
  );
}

export default ChatTwo;
