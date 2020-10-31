import React, {useState, useEffect} from "react";
import './App.css'

function ChatTwo() {
  const [chat, setChat] = useState("");

  //hook to grab our messages from our mainchat database and set them as chat
  useEffect(() => {
    fetch("/catchat")
      .then((response) => response.json())
      .then((message) => {
        setChat(message);
        console.log(message);
      });
  }, []);

  //refresh entire page every ten second
  setTimeout(function(){
    window.location.reload(1);
  }, 10000);


  //if chat is not a null value than map through this information if so.... otherwise please present us with loading data
  return (
    <div>
      <body class="body">
        <div class="chatDisplay">
        <p class="chatparagraph">
          {chat ? (
            chat.map((chat) => (
              <p>
                {chat.name}: {chat.message}
              </p>
            ))
          ) : (
            <p>LOADING CHAT!</p>
          )}
          </p>
        </div>
        <form class="textBox" method="POST" action="/catchat">
          <input name='username' type="text" placeholder="username" />
          <textarea name='messageInput' class="text" type="text" placeholder="Type Message Here" />
          <input type="submit" value="send" class="buttons" />
          <input type="submit" value="refresh" class="buttons" />
        </form>
      </body>
    </div>
  );
}

export default ChatTwo;
