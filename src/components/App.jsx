import React, { Fragment, useState, useEffect } from "react";

import "./App.css";

import Particles from "react-particles-js";
import particleConfig from "./particlesConfig";

import { Route } from "react-router-dom";

import { Header } from "./Layout/index";
import { MainPost } from "./Post/index";
import { ChatPage } from "./Chat/index";

import { Container } from "@material-ui/core";

function App() {
  const [windowTop, setWindowTop] = useState(window.pageYOffset - 50);

  const handleScroll = () => {
    setWindowTop(window.pageYOffset - 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowTop]);

  return (
    <Fragment>
      <Header />
      <Container fixed>
        <div
          style={{
            position: "absolute",
            top: windowTop,
            left: "0px",
            // zIndex: -1,
          }}>
          <Particles width="100vw" heigth="100vh" params={particleConfig} />
        </div>
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
