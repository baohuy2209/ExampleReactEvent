import "./example1.css";
function Example1() {
  const onDoubleClickHandler = () => {
    console.log("You have Clicked Twice");
  };

  return (
    <div className="App">
      <h1>Hey Geek!</h1>
      <button onDoubleClick={onDoubleClickHandler}>Double Click me!</button>
    </div>
  );
}
export default Example1;
