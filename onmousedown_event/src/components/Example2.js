import React, { useState } from "react";
import "./Example2.css";
const Example2 = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const containerStyle = {
    backgroundColor: isMouseDown ? "lightblue" : "antiquewhite",
    padding: "20px",
  };

  return (
    <div
      className="App"
      style={containerStyle}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <h2>Click and hold to change color</h2>
    </div>
  );
};

export default Example2;
