import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CardsPage from "../app/pages/cards-page";
import PokemonInfo from "../app/pages/pokemon-info";
import ListPage from "../app/pages/list-page";
import About from "../app/pages/about";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <CardsPage />
      </Route>
      <Route path="/list">
        <ListPage />
      </Route>
      <Route path="/pokemon/:name">
        <PokemonInfo />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
