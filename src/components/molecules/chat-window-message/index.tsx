import React from "react";
import "./styles.css";

interface IChatWindowMessage {
  message: string;
}

export const ChatWindowMessage: React.FC<IChatWindowMessage> = ({
  message,
}) => {
  return (
    <ul className="chat__window-item">
      <li className="chat__window-list">
        <div className="chat__window-message">
          <p className="chat__window-text">{message}</p>
        </div>
      </li>
      <li className="chat__window-list">
        <div className="chat__window-message">
          <p className="chat__window-text">{message}</p>
        </div>
      </li>
    </ul>
  );
};
