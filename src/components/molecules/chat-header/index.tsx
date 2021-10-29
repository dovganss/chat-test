import React from "react";
import ChatHeaderImg from "../../atomes/chat-header-img";
import Logo from "../../atomes/logo";
import "./styles.css";

function ChatHeader() {
  return (
    <div className="chat__header">
      <Logo />
      <ChatHeaderImg />
    </div>
  );
}

export default ChatHeader;
