import React, { useState } from "react";

function App() {
  const [content, setContent] = useState("");

  const handleBlur = () => {
    // Simulate auto-saving the content when it loses focus
    console.log("Content auto-saved:", content);
  };

  return (
    <div>
      <p>Remark:</p>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default App;
