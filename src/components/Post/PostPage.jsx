import React, { useState, useEffect } from "react";

import MainPost from "./MainPost";

import { IG_POSTS } from "./../Graphql/query";
import {GET_TOKEN} from "./../Graphql/mutation";

import { useQuery, useMutation,  useLazyQuery } from "@apollo/client";

const PostPage = () => {
  const [loadPost, temp] = useLazyQuery(IG_POSTS);
  const { data, called, loading } = temp;

  const [mutateToken, tokenResp] = useMutation(GET_TOKEN);

  
  useEffect(() => {
      loadPost();
      mutateToken({variables:{email: "daviddummy2002@gmail.com", password: "12345"}})
    }, []);
    
    console.log("token :", tokenResp);
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
