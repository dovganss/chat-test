import React from "react";
import ChatFooterFile from "../../atomes/chat-footer-file";
import { ChatFooterMessage } from "../../atomes/chat-footer-message";
import ChatFooterSend from "../../atomes/chat-footer-send";

import "./styles.css";

function ChatFooter() {
  return (
    <div className="chat__footer">
      <ChatFooterFile />
      <ChatFooterMessage message="Write something..." />
      <ChatFooterSend />
    </div>
  );
}

export default ChatFooter;
