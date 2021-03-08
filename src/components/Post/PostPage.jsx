import React, { useState, useEffect } from "react";

import MainPost from "./MainPost";

import { IG_POSTS } from "./../Graphql/query";

import { useQuery, useLazyQuery } from "@apollo/client";

const PostPage = () => {
  const [loadPost, temp] = useLazyQuery(IG_POSTS);
  const { data, called, loading } = temp;

  useEffect(() => {
    loadPost();
  }, []);

  if (!called || (called && loading)) return <p>Loading ...</p>;

  return data ? (
    data.ig_posts.nodes.map((post) => {
      return <MainPost {...post} />;
    })
  ) : (
    <h1> Empty</h1>
  );
};

export default PostPage;
