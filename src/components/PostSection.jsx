import React from "react";
import { useAxios } from "../redux/mocks/adapter";
import Loader from "./Loader";

const PostSection = () => {
  const { data, loading, error } = useAxios({
    method: "GET",
    url: "/api/posts",
  });

  if (loading)
    return (
      <div id="_post-container">
        <Loader className="mx-auto" />
      </div>
    );

  if (error) {
    return <div id="_post-container">Error...</div>;
  }

  return (
    <div id="_post-container">
      {data &&
        data.posts.map((item, idx) => (
          <div key={idx} className="w-full">
            {item.post_by.name}
          </div>
        ))}
    </div>
  );
};

export default PostSection;
