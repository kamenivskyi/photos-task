import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhotoPage from "./pages/PhotoPage";

export const Routes = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/photo/:id" component={PhotoPage} exact />
  </Switch>
);
