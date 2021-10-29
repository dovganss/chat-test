import React from "react";
import { ChatWindowMessage } from "../../molecules/chat-window-message";
import "./styles.css";

function ChatWindow() {
  return (
    <div className="chat__window">
      <ChatWindowMessage message="Sed ut perspiciatis unde omnis iste natus error sit voluptatem" />
    </div>
  );
}

export default ChatWindow;
