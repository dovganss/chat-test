import React from "react";
import "./../../../css/main.css";
import ChatTemplate from "../../templates/chat";

function ChatPage() {
  return (
    <div className="container container--chat">
      <ChatTemplate
        user="Konstantin Konstantinopolski"
        message="Hey!"
        time="3 minutes"
      />
    </div>
  );
}

export default ChatPage;
