import "./App.css";
//import Movies from "./components/movies";
import Header from "./components/header";
import Button from "./components/button";
function App() {
  const inputs = [
    { inputColor: "red", inputText: "button1" },
    { inputColor: "green", inputText: "button2" },
    { inputColor: "blue", inputText: "button3" },
  ];
  return (
    <main className="container">
      {/* <Movies /> */}
      <Header inputText={"hi"} />
      {/* <Button inputColour={"red"} inputText={"button1"} />
      <Button inputColour={"green"} inputText={"button2"} />
      <Button inputColour={"blue"} inputText={"button3"} /> */}

      {inputs.map((obj) => (
        <Button inputText={obj.inputText} inputColor={obj.inputColor} />
      ))}
    </main>
  );
}

export default App;