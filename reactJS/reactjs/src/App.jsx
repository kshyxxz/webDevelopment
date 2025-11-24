import Hello from "./components/Hello";
function App() {
  return (
    <div className="App">
      <Hello name="robin" msg="how are you?"/>
      <Hello name="pat" msg="are you ok?"/>
      <Hello name="wood" msg="how you doin?"/>
    </div>
  );
}

export default App;