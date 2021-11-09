import Form from "pages/Veiculos/Form";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Veiculos from "./pages/Veiculos";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/veiculos" exact>
          <Veiculos />
        </Route>
        <Route path="/veiculos/novo">
          <Form />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;