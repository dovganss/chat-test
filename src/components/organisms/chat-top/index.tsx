import React from "react";
import { ChatItemUser } from "../../atomes/chat-item-user";
import { ChatTopTime } from "../../atomes/chat-top-time";
import "./styles.css";

interface IChatTop {
  user: string;
  time: string;
}

export const ChatTop: React.FC<IChatTop> = ({ user, time }) => {
  return (
    <div className="chat__top">
      <ChatItemUser user={user} />
      <ChatTopTime time={time} />
    </div>
  );
};

export default ChatTop;
