import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import FormArea from "./components/form";
import Header from "./components/header";
import HomePage from "./components/mainpage";
import OnayPage from "./components/onaypage";
import { useState } from "react";
function App() {
  const [pizzaBilgi, SetPizzaBilgi] = useState({
    isim: "",
    boyut: "",
    hamurTipi: "",
    toppings: [],
    extraNotes: "",
    adet: 1,
  });
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/OrderPage">
          <FormArea SetPizzaBilgi={SetPizzaBilgi} />
        </Route>
        <Route path="/Onaypage" exact />
        <OnayPage pizzaBilgi={pizzaBilgi} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
