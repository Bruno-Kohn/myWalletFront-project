import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/reset.css";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Records from "./components/Records.js";
import NewIncome from "./components/NewIncome.js";
import NewExpense from "./components/NewExpense.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/records" exact>
          <Records />
        </Route>
        <Route path="/income" exact>
          <NewIncome />
        </Route>
        <Route path="/expense" exact>
          <NewExpense />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));
