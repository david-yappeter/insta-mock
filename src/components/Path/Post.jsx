import React, { Fragment } from "react";
import { Container } from "@material-ui/core";

import { PostPage } from "./../Post/index";
import { Header } from "./../Layout/index";

export default () => {
  return (
    <Fragment key="post-path">
      <Header />
      <Container fixed>
        <div
          style={{
            marginTop: "64px",
          }}>
          <PostPage />
        </div>
      </Container>
    </Fragment>
  );
};
