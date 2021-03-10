import React, { Fragment } from "react";

import { Container } from "@material-ui/core";
import { Header } from "./../Layout/index";
import { ChatPage } from "./../Chat/index";

export default () => {
  return (
    <Fragment key="chat-path">
      <Header />
      <Container fixed>
        <div
          style={{
            marginTop: "64px",
          }}>
          <ChatPage />
        </div>
      </Container>
    </Fragment>
  );
};
