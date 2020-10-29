import React, { useState, useEffect } from "react";

function Username() {
  return (
    <div id="username-page">
      <body id="bodyUsername">
        <form id='username'>
            <input id='username-input' type="text" placeholder="Username" />
            <input id='username-submit' type='submit' />
        </form>
      </body>
    </div>
  );
}

export default Username
