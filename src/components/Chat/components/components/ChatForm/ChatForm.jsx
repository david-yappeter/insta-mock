import React, { useState } from "react";

import { Icon } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const ChatForm = () => {
  const [chatRoomName, setChatRoomName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setChatRoomName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Chat Room Name"
        name="chatRoomName"
        value={chatRoomName}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default ChatForm;
