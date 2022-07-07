import moment from "moment";
import React, { useState, useEffect } from "react";
import { useLazyAxios } from "../redux/mocks/adapter";
import { updateQueryStringParameter } from "../redux/util";
import Avatar from "./Avatar";
import Loader from "./Loader";
import { svgIcon, SvgIcon } from "./SvgIcon";

const PostSection = () => {
  const limit = 3;
  const [page, setPage] = useState(1);
  const [noData, setNoData] = useState(false);

  const [req, { data, loading, error, called, fetchMore }] = useLazyAxios({
    method: "get",
    url: updateQueryStringParameter("/api/posts", {
      page: page,
      limit: limit,
    }),
  });

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData && !loading) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    req();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (called) {
      fetchMore(
        (existing, incoming) => {
          if (incoming.posts?.length < limit) {
            setNoData(true);
          }

          return {
            posts: [...(existing.posts || {}), ...(incoming.posts || {})],
          };
        },
        {
          url: updateQueryStringParameter("/api/posts", {
            page: page,
            limit: limit,
          }),
        }
      );
    }
    //eslint-disable-next-line
  }, [page]);

  if (!called)
    return (
      <div id="_post-container">
        <Loader className="mx-auto" />
      </div>
    );

  if (error) {
    return <div id="_post-container">Error... {JSON.stringify(error)} </div>;
  }

  return (
    <div id="_post-container">
      {data &&
        data.posts.map((item) => (
          <div key={item.id} className="_card _post-card">
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
            <div className="_post-content-container">
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
              <p className="_post-like-count">
                {item.likes > 0
                  ? `${item.likes} like${item.likes > 1 && "s"}`
                  : " "}
              </p>
              <div className="mb-12px">
                <span className="_post-like-count">{item.post_by.name}</span>{" "}
                <span
                  className="_post-desc"
                  dangerouslySetInnerHTML={{ __html: item.description }}></span>
              </div>

              {item.comments.length > 0 && (
                <p className="_post-comments">
                  View all {item.comments.length} comment
                  {item.comments.length > 1 && "s"}
                </p>
              )}
              <p className="_post-date">{moment(item.created_at).fromNow()}</p>
              <hr />
              <div className="_post-comment-container">
                <SvgIcon icon={svgIcon.EMOJI} />
                <input
                  className="_post-comment-input"
                  placeholder="Add a comment..."
                />
                <p className="_post-comment-submit">Post</p>
              </div>
            </div>
          </div>
        ))}
      {loading && <Loader className="my-20px mx-auto" />}
    </div>
  );
};

export default PostSection;
