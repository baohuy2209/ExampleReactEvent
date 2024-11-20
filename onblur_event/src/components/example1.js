import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleBlur = () => {
    console.log("Input blurred");
  };

  return (
    <form action="">
      <label htmlFor="">Name:</label>
      <input
        type="text"
        value={value}
        placeholder="Write Your Name"
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
      />
    </form>
  );
}

export default App;
