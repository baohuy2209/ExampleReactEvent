import React, { useState } from "react";
import "./Example1.css";

const Example1 = () => {
  const [count, setCount] = useState(0);

  const handleMouseDown = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <button onMouseDown={handleMouseDown}>Increment on Mouse Down</button>
    </div>
  );
};
export default Example1;
