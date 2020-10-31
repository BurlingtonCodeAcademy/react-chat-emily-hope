import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ChatOne from "./chat1.js";
import ChatTwo from "./chat2.js";
import ChatThree from "./chat3.js";
import Username from "./username.js";

function App() {
    <BrowserRouter>
      <Switch>
        <div className="App">
          <h1 id="title">
            La Chat Room of <i>dreams</i>
          </h1>
          <div id="chatroom-list">
            <Link className="chatroom" to={{ pathname: "/mainchat" }}>
              Hopes, Fears, Dreams
            </Link>
            <Link to={{ pathname: "/catchat" }} className="chatroom">
              CAT Chat
            </Link>
            <div className="chatroom">Politics, $$, Religion</div>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
}
const Mainchat = () => {
  return (
    <div>
      <App />
      <ChatOne/>
    </div>
  );
};

export default App;
