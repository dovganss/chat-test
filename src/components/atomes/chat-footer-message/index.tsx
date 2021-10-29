import React from "react";
import "./styles.css";

interface IChatFooterMessage {
  message: string;
}

export const ChatFooterMessage: React.FC<IChatFooterMessage> = ({
  message,
}) => {
  return <p className="chat__footer-message">{message}</p>;
};
