import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/reset.css";
import Login from "./Login.js";
import Register from "./Register.js";
import Records from "./Records.js";

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
      </Switch>
    </BrowserRouter>
  );
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));
