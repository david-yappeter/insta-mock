import React from "react";

const MyMessage = (props) => {
  const { message } = props;
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3BA250",
      }}>
      {message.text}
    </div>
  );
};

export default MyMessage;
