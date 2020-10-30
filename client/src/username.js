import React, { useState, useEffect } from "react";

function Username() {
  const [usernameSubmit, setUsernameSubmit]= useState('')
  
  function handleUsernameSubmit(event){
    event.preventDefault()
  }
  return (
    <div id="username-page">
      <body id="bodyUsername">
        <form id="username">
          <input name="username" id="username-input" type="text" placeholder="Username" />
          <input onSubmit={handleUsernameSubmit} id="username-submit" type="submit" />
        </form>
      </body>
    </div>
  );
}

export default Username;
