import React, { useEffect, useState } from "react";

function ChatOne() {
  const [chat, setChat] = useState('')
  useEffect(() => {
    fetch("/chatroom")
      .then((response) => response.json())
      .then((chatMessage) => {
        let chat = [];
        chatMessage.forEach((message) => {
          chat.push(`${message.name}: ${message.message}`)
        });
      });
  });
  return (
    <div>
      <body class="body">
        <div class="chatDisplay">Chat Room One{chat}</div>
        <form class="textBox">
          <input type="text" placeholder="username"/>
          <textarea class="text" type="text" placeholder="Type Message Here" />
          <input type="submit" value="send" class="buttons" />
          <input type="submit" value="refresh" class="buttons" />
        </form>
      </body>
    </div>
  );
}

export default ChatOne;
