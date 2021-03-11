import React, { useState, useEffect } from "react";

import MainPost from "./MainPost";

import { IG_POSTS } from "./../Graphql/query";
import {GET_TOKEN} from "./../Graphql/mutation";

import { useQuery, useMutation,  useLazyQuery } from "@apollo/client";

import {useCookies} from "react-cookie";
import {Redirect} from "react-router-dom";

const PostPage = () => {
    const [cookies] = useCookies();
  const [loadPost, temp] = useLazyQuery(IG_POSTS);
  const { data, called, loading } = temp;

  useEffect(() => {
    loadPost();
  }, []);

  if (!cookies.access_token) {
      return <Redirect to="/" />
  }

  if (!called || (called && loading)) return <p>Loading ...</p>;

  return data ? (
    data.ig_posts.nodes.map((post, index) => {
      return <MainPost key={`main_post_$index`}{...post} />;
    })
  ) : (
    <h1> Empty</h1>
  );
};

export default PostPage;
