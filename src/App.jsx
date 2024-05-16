import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";
import FormArea from "./components/form";
import Headers from "./components/header";
import { Counter } from "./components/counter";

function App() {
  return (
    <>
      <Headers></Headers>
      <FormArea></FormArea>
    </>
  );
}

export default App;
