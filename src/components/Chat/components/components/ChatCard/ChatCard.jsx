import React from "react";

import {
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const ChatCard = ({ chat, index }) => {
  const chatRoomLastMessage = (lastMessage) => {
    return (
      <Typography variant="subtitle">
        {lastMessage && lastMessage.attachments.length > 0
          ? lastMessage.sender_username + " send Attachment"
          : lastMessage.sender_username + ": " + lastMessage.text}
      </Typography>
    );
  };

  const chatRoomDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDay();
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][dateObj.getMonth()];

    return (
      <Typography variant="subtitle2" style={{ float: "right" }}>
        {day + " " + month}
      </Typography>
    );
  };

  return (
    <Card style={{ paddingLeft: "3px" }}>
      <CardActionArea>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
            }}>
            <Avatar alt="Room Image" src="" style={{ top: "7px" }} />
            <div style={{ marginLeft: "10px", flexGrow: "1" }}>
              <Typography
                variant="h6"
                style={{ fontSize: "18px" }}
                gutterBottom>
                {chat?.title}
              </Typography>
              {chatRoomLastMessage(chat?.last_message)}
              {chatRoomDate(chat?.last_message?.created)}
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChatCard;
