import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import FormArea from "./components/form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormArea></FormArea>
    </>
  );
}

export default App;
