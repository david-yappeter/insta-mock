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
import { CookiesProvider } from "react-cookie";
import { createUploadLink } from "apollo-upload-client";
import { useCookies } from "react-cookie";
import { setContext } from "@apollo/client/link/context";

function App() {
  const [cookies] = useCookies();
  const authLink = setContext((_, { headers }) => {
    const token = cookies.access_token;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    // Provide required constructor fields
    cache: cache,
    // uri: "http://david-user-go.herokuapp.com/query",

    // Provide some optional constructor fields
    name: "react-web-client",
    version: "1.3",
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
    link: authLink.concat(
      createUploadLink({
        uri: "http://david-user-go.herokuapp.com/query",
        // uri: "http://localhost:8080/query",
      })
    ),
  });

  return (
    <CookiesProvider>
      <ApolloProvider client={client}>
        <div
          style={{
            position: "fixed",
          }}
        >
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
    </CookiesProvider>
  );
}

export default App;
