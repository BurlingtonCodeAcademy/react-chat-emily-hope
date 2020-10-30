import React from "react";
import './App.css'

function ChatTwo() {
  return (
    <div>
      <body class='body'>
        <div id="catChat" class="chatDisplay">Chat Room Two</div>
        <form class="textBox">
          <textarea class="text" type="text" placeholder="Type Message Here" />
          <input type="submit" value="send" class="buttons" />
          <input type="submit" value="refresh" class="buttons" />
        </form>
      </body>
    </div>
  );
}

export default ChatTwo;
