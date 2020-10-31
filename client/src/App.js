import React, {useState, useEffect} from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ChatOne from "./chat1.js";
import ChatTwo from "./chat2.js";
import ChatThree from "./chat3.js";
import Username from "./username.js";

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
            <div id="chatroom-list">
              <Link className="chatroom" to="/mainchat">
                Hopes, Fears, Dreams
              </Link>
            </div>
            <div>
              <Link to="/catchat" className="chatroom">
                CAT Chat
              </Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact={true} path="/">
            <Username />
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
