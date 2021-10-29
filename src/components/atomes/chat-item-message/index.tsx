import React from "react";
import "./styles.css";

interface IChatItemMessage {
  message: string;
}

export const ChatItemMessage: React.FC<IChatItemMessage> = ({ message }) => {
  return (
    <div>
      <p className="chat__item-message">{message}</p>
    </div>
  );
};
