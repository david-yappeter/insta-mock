import React, { Fragment, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";

import ChatBubble from "react-chat-bubble";

const useStyles = () => {};

const ChatPanel = () => {
  const [chat, setChat] = useState([
    {
      type: 0,
      image:
        "https://drive.google.com/uc?export=view&id=11d8qop_7ENjyyvZsTq3ALzhUsW0jFNRX",
      text: "Hello! Good Morning!",
    },
    {
      type: 1,
      image:
        "https://drive.google.com/uc?export=view&id=11d8qop_7ENjyyvZsTq3ALzhUsW0jFNRX",
      text: "Hello! Good Afternoon!",
    },
  ]);

  const handleAddChat = (msg) => {
    setChat([
      ...chat,
      {
        type: 0,
        image:
          "https://drive.google.com/uc?export=view&id=11d8qop_7ENjyyvZsTq3ALzhUsW0jFNRX",
        text: msg,
      },
    ]);
  };

  const classes = useStyles();
  return (
    <Fragment>
      <ChatBubble messages={chat} onNewMessage={handleAddChat} />
    </Fragment>
  );
};

export default ChatPanel;
