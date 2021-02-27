import React, { Fragment } from "react";

import { Route } from "react-router-dom";

import { Header } from "./Layout/index";
import { MainPost } from "./Post/index";
import { ChatPage } from "./Chat/index";

import { Container } from "@material-ui/core";

function App() {
  return (
    <Fragment>
      <Header />
      <Container fixed>
        <div
          style={{
            marginTop: "64px",
          }}>
          <Route exact path="/">
            <MainPost />
            <MainPost />
            <MainPost />
            <MainPost />
            <MainPost />
          </Route>
          <Route path="/chat">
            <ChatPage />
          </Route>
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
