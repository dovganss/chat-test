import React from "react";
import ChatItem from "../../molecules/chat-item";
import "./styles.css";

interface IChatList {
  user: string;
  message: string;
}

export const ChatList: React.FC<IChatList> = ({ user, message }) => {
  return (
    <ul className="chat__list">
      <ChatItem user={user} message={message} />
    </ul>
  );
};

export default ChatList;
