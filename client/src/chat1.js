import React, { useEffect, useState } from "react";

function ChatOne() {
  const [chat, setChat] = useState("");

  //hook to grab our messages from our mainchat database and set them as chat
  useEffect(() => {
    fetch("/mainchat")
      .then((response) => response.json())
      .then((message) => {
        setChat(message);
        console.log(message);
      });
  }, []);

  //if chat is not a null value than map through this infomration if so.... otherwise please present us with loading data
  return (
    <div>
      <body class="body">
        <div class="chatDisplay">
          {chat ? (
            chat.map((chat) => (
              <p>
                {chat.name} : {chat.message}
              </p>
            ))
          ) : (
            <p>LOADING CHAT!</p>
          )}
        </div>
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
