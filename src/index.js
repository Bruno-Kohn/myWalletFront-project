import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/reset.css";
import Login from "./Login.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));
