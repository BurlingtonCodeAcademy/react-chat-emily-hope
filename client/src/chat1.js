import React, { useEffect, useState } from "react";

function ChatOne() {
  const [chat, setChat] = useState(null);

  useEffect(() => {
    fetch("/mainchat")
      .then((response) => response.json())
      .then((chatMessage) => {
        let chatArray = [];
        chatMessage.forEach((message) => {
          chatArray.push(`${message.name}: ${message.message}`);
          setChat(chatArray);
          console.log(chatArray);
        });
      });
  }, []);

  return (
    <div>
      <body class="body">
        <div class="chatDisplay">{chat}</div>
        <form class="textBox">
          <input type="text" placeholder="username" />
          <textarea class="text" type="text" placeholder="Type Message Here" />
          <input type="submit" value="send" class="buttons" />
          <input type="submit" value="refresh" class="buttons" />
        </form>
      </body>
    </div>
  );
}

export default ChatOne;
