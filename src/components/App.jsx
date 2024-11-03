import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isHovered, setIsHovered] = useState(false);

  function handleClick() {
    setHeadingText("submitted");
  }

  function handleMouseIn() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isHovered ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
