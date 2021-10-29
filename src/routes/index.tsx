import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SCREENS } from "./endpoints";
import MainPage from "./../components/pages/main/index";
import ChatPage from "./../components/pages/chat/index";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_CHAT} exact>
        <ChatPage />
      </Route>
      <Route path={SCREENS.SCREEN_MAIN} exact>
        <MainPage />
      </Route>
    </Switch>
  );
};

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);
