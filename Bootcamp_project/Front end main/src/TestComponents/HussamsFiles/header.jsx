import React, { Component } from "react";
import Button from "./button";
function Header({ inputText }) {
  return (
    <div>
      <h1>{inputText}</h1>
      <Button color={"blue"} inputText={"button2"} />
    </div>
  );
}

export default Header;