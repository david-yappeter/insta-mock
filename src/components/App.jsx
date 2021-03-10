import React, { Fragment, useState, useEffect } from "react";

import "./App.css";

import Particles from "react-particles-js";
import particleConfig from "./particlesConfig";

import { Route } from "react-router-dom";

import { Header } from "./Layout/index";
import RootPath from "./Path/Root";
import PostPath from "./Path/Post";
import ChatPath from "./Path/Chat";

import { Container } from "@material-ui/core";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

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
    <Fragment>
      <ApolloProvider client={client}>
        <div
          style={{
            position: "fixed",
          }}>
          <Particles width="100vw" heigth="100vh" params={particleConfig} />
        </div>
        <Route exact path="/">
          <RootPath />
        </Route>
        <Route exact path="/post">
          <PostPath />
        </Route>
        <Route exact path="/chat">
          <ChatPath />
        </Route>
      </ApolloProvider>
    </Fragment>
  );
}

export default App;
