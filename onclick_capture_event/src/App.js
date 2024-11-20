function App() {
  const onClickCapture = () => {
    console.log("onClickCapture");
  };
  return (
    <div className="App">
      <h1>Hey Geek!</h1>
      <label>Please click on the button</label>
      <button onClickCapture={onClickCapture}>Click Me</button>
    </div>
  );
}

export default App;
