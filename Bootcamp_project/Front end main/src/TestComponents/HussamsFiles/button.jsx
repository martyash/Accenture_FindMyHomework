import React, { Component } from "react";
function Button({ inputText, color }) {
  return (
    <div
      style={{
        border: "2px solid red",
      }}
    >
      <div>color: {color}</div>
      <div>inputTExt: {inputText}</div>
    </div>
  );
}

export default Button;