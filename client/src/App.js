import React, { useState, useEffect } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ChatOne from "./chat1.js";
import ChatTwo from "./chat2.js";
import MainChat from "./mainChat.js";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="App">
            <div>
              <Link to="/">
                <h1 id="title">
                  La Chat Room of <i>dreams</i>
                </h1>
              </Link>
            </div>
            <div className="chatroom-list">
              <div className="chatroom" >
                <Link to="/mainchat">
                  Hopes, Fears, Dreams
                </Link>
              </div>
              <div className="chatroom" >
                <Link to="/catchat" >
                  CAT Chat
                </Link>
              </div>
              <div className="chatroom">Religion, $$, Politics</div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact={true} path="/">
            <MainChat />
          </Route>
          <Route exact={true} path="/mainchat">
            <ChatOne />
          </Route>
          <Route exact={true} path="/catchat">
            <ChatTwo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
