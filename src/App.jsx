import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import FormArea from "./components/form";
import Header from "./components/header";
import HomePage from "./components/mainpage";
import OnayPage from "./components/onaypage";
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
        <Route path="/Onaypage" exact />
        <OnayPage />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
