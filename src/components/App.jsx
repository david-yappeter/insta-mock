import React, { Fragment } from "react";

import { Header } from "./Layout/index";
import { MainPost } from "./Post/index";

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
          <MainPost />
          <MainPost />
          <MainPost />
          <MainPost />
          <MainPost />
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
