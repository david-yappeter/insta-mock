import React from "react";
import { useAxios } from "../redux/mocks/adapter";
import Avatar from "./Avatar";
import Loader from "./Loader";
import { svgIcon, SvgIcon } from "./SvgIcon";

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
          <div key={idx} className="_card">
            {/* Header */}
            <div className="_card-header">
              <Avatar
                className="mr-12px"
                size="28px"
                src={item.post_by.image}
              />
              <span className="username-title">{item.post_by.name}</span>
              <div className="ml-auto">
                <SvgIcon icon={svgIcon.MORE_OPTION} />
              </div>
            </div>
            {/* Attachment */}
            <div className="_card-image">
              <img src={item.content[0]} alt="" />
            </div>
            {/* Content */}
            <div className="px-12px py-8px">
              {/* Tools */}
              <div className="flex mb-12px">
                <SvgIcon
                  className="cursor-pointer mr-12px"
                  icon={svgIcon.HEART}
                />
                <SvgIcon
                  className="cursor-pointer mr-12px"
                  icon={svgIcon.COMMENT}
                />
                <SvgIcon className="cursor-pointer" icon={svgIcon.SHARE} />
                <SvgIcon
                  className="cursor-pointer ml-auto"
                  icon={svgIcon.SAVE}
                />
              </div>
              {/* Like */}
              <p className="_post-like-count">443 likes</p>
              <p className="_post-like-count">loberz</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostSection;
