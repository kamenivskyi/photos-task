import { Switch, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import PhotoPage from "./pages/PhotoPage";

export const Routes = () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/photo/:id" component={PhotoPage} exact />
    <Route path="/favorites" component={FavoritesPage} />
  </Switch>
);
