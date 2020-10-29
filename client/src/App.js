import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
import ChatOne from './chat1.js'
import ChatTwo from './chat2.js'
import ChatThree from './chat3.js'
import Username from './username.js'

function App() {
  const [chatRoom, setChatRoom] = useState(<ChatOne/>)
  // changes it to login screen
  function handleUsernameClick(){
    setChatRoom(<Username/>)
  }
  // changes to chatroom one
  function handleChatOneClick(){
    setChatRoom(<ChatOne/>)
  }
  // changes to chatroom two
  function handleChatTwoClick(){
    setChatRoom(<ChatTwo/>)
  }
  // changes to chatroom three
  function handleChatThreeClick(){
    setChatRoom(<ChatThree/>)
  }

  return (
    <div className="App">
      <h1 id="title" onClick={handleUsernameClick} >La Chat Room of <i>dreams</i></h1>
      <div id="chatroom-list">
        <div class="chatroom" onClick={handleChatOneClick} >Chat Room One</div>
        <div class="chatroom" onClick={handleChatTwoClick}>Chat Room Two</div>
        <div class="chatroom" onClick={handleChatThreeClick}>Chat Room Three</div>
      </div>
      {chatRoom}
    </div>
  );
}

export default App;
