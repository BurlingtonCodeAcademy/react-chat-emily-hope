import React from "react";

function ChatThree() {
  return (
    <div>
      <body class="body">
        <div class="chatDisplay">Chat Room Three</div>
        <form class="textBox">
          <textarea class="text" type="text" placeholder="Type Message Here"/>
          <input type="submit" value="send" class="buttons" />
          <input type="submit" value="refresh" class="buttons" />
        </form>
      </body>
    </div>
  );
}

export default ChatThree;
