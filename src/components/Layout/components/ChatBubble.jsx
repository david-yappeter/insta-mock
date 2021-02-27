import React from "react";

import chatBubbleImage from "./chat-bubble.png";

import { Link } from "@material-ui/core";

const ChatBubble = ({ classes: { chatIconSize, chatIconEnd } }) => {
  return (
    <Link href="/chat" className={chatIconEnd}>
      <img
        className={chatIconSize}
        alt="Chat Button"
        src={chatBubbleImage}></img>
    </Link>
  );
};

export default ChatBubble;
