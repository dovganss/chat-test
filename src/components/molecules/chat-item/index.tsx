import React from "react";
import ChatItemAvatarMen from "../../atomes/chat-item-avatar-men";
import { ChatItemUser } from "../../atomes/chat-item-user";
import { ChatItemMessage } from "../../atomes/chat-item-message";
import "./styles.css";

interface IChatItem {
  user: string;
  message: string;
}

export const ChatItem: React.FC<IChatItem> = ({ user, message }) => {

  return (
    <ul className="chat__item">
      <div className="chat__item-img">
        <ChatItemAvatarMen />
      </div>
      <div className="chat__item-text">
        <ChatItemUser user={user} />
        <ChatItemMessage message={message} />
      </div>
    </ul>
  );
};

export default ChatItem;
