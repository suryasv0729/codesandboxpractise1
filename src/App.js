import "./styles.css";
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState(0);
  const [dark, setDark] = useState(false);
  console.log(dark);
  function add() {
    if (value > 1) setDark(false);
    else setValue(value + 1);
  }
  function minus() {
    if (value < 1) setDark(true);
    else setValue(value - 1);
  }
  function toggle() {
    setDark(!dark);
  }

  return (
    <div className={`App ${dark ? "on" : "off"}`}>
      <h1>{value}</h1>
      <button onClick={() => add()}>add</button>
      <button onClick={() => minus()}>minus</button>
      {/* <button onClick={() => toggle()}>on/off</button> */}
    </div>
  );
}
