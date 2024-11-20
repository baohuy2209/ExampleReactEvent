import React, { useState } from "react";
import "./example2.css";
const Example2 = () => {
  const [num, setNum] = useState(0);

  const handleDoubleClick = () => {
    setNum(num + 1);
  };
  return (
    <div className="App">
      <h2>{num}</h2>
      <button onDoubleClick={handleDoubleClick}>Double Click!</button>
    </div>
  );
};
export default Example2;
