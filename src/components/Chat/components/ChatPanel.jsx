import React, { Fragment, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";

import ChatBubble from "react-chat-bubble";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed/ChatFeed";
import ChatList from "./components/ChatList/ChatList";
import LoginForm from "./components/ChatFeed/LoginForm";
import ChatCard from "./components/ChatCard/ChatCard";

const useStyles = () => {};

const ChatPanel = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <ChatBubble messages={chat} onNewMessage={handleAddChat} /> */}

      <ChatEngine
        // projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        projectID={"94b2e0fd-b726-4b6b-aa82-07aee5c32e3d"}
        height="100vh"
        // userName={localStorage.getItem("username")}
        // userSecret={localStorage.getItem("password")}
        userName="david"
        userSecret="123123"
        // renderChatCard={(chat, index) => {
        //   console.log(chat, index);
        //   return <ChatCard chat={chat} index={index} />;
        // }}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        // renderChatList={(chatAppProps) => {
        //   return <ChatList {...chatAppProps} />;
        // }}
      />
    </Fragment>
  );
};

export default ChatPanel;
