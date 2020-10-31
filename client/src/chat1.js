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

 //refresh window every ten seconds to grab new messages
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
                {/* <p id="message sent">message sent:{chat.sent.slice(11,16)}
                </p> NEED TO WORK ON MESSAGE TIME SENT STAMP*/}
              </p>
            ))
          ) : (
            <p>LOADING CHAT!</p>
          )}
          </p>
        </div>
        <form class="textBox" method="POST" action="/mainchat">
          <input name='username' type="text" placeholder="username" />
          <textarea name='messageInput' class="text" type="text" placeholder="Type Message Here" />
          <input type="submit" value="send" class="buttons" />
          <input type="submit" value="refresh" class="buttons" />
        </form>
      </body>
    </div>
  );
}

export default ChatOne;
