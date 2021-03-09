import React, { Fragment, useState, useEffect } from "react";

import "./App.css";

import Particles from "react-particles-js";
import particleConfig from "./particlesConfig";

import { Route } from "react-router-dom";

import { Header } from "./Layout/index";
import { PostPage } from "./Post/index";
import { ChatPage } from "./Chat/index";
import LoginPage  from "./Login/LoginPage";

import { Container } from "@material-ui/core";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CookiesProvider } from "react-cookie";

function App() {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    // Provide required constructor fields
    cache: cache,
    uri: "http://david-user-go.herokuapp.com/query",

    // Provide some optional constructor fields
    name: "react-web-client",
    version: "1.3",
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });

  return (
    <CookiesProvider>
      <ApolloProvider client={client}>
        <Header />
        <Container fixed>
          <div
            style={{
              position: "fixed",
            }}>
            <Particles width="100vw" heigth="100vh" params={particleConfig} />
          </div>
          <div
            style={{
              marginTop: "64px",
            }}>
            <Route exact path="/">
                <LoginPage />
            </Route>
            <Route exact path="/post">
              <PostPage />
            </Route>
            <Route path="/chat">
              <ChatPage />
            </Route>
          </div>
        </Container>
      </ApolloProvider>
    </CookiesProvider>
  );
}

export default App;
