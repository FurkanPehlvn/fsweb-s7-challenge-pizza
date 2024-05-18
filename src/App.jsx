import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import FormArea from "./components/form";
import Header from "./components/header";

import HomePage from "./components/mainpage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/OrderPage">
          <FormArea />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
