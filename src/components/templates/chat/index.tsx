import React from "react";
import ChatHeader from "../../molecules/chat-header";
import ChatList from "../../organisms/chat-list";
import ChatTop from "../../organisms/chat-top";
import ChatFooter from "../../organisms/chat-footer";
import "./styles.css";
import ChatWindow from "../../organisms/chat-window";

interface IChatTemplate {
  user: string;
  message: string;
  time: string;
}

export const ChatTemplate: React.FC<IChatTemplate> = ({
  user,
  message,
  time,
}) => {
  return (
    <div>
      <ChatHeader />
      <div className="chat__main">
        <ChatList user={user} message={message} />
        <div className="chat__main-blocks">
          <ChatTop user={user} time={time} />
          <ChatWindow />
          <ChatFooter />
        </div>
      </div>
    </div>
  );
};

export default ChatTemplate;
