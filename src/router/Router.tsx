import React, { FunctionComponent } from "react";
import { Redirect, Route, RouteProps, Switch } from "react-router-dom";

import GamePage from "../game/pages/GamePage";
import PostGamePage from "../game/pages/PostGamePage";
import PreGamePage from "../game/pages/PreGamePage";
import MainPage from "../main/pages/MainPage";

const routes: RouteProps[] = [
  {
    exact: true,
    path: "/game",
    component: PreGamePage,
  },
  {
    exact: true,
    path: "/game/play",
    component: GamePage,
  },
  {
    exact: true,
    path: "/game/results",
    component: PostGamePage,
  },
  {
    exact: true,
    path: "/",
    component: MainPage,
  },
];

const Router: FunctionComponent = (props) => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
