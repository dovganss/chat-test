import React from "react";
import img from "../../../img/avatar-men.png";
import "./styles.css";

function ChatItemAvatarMen() {
  return (
    <div>
      <img className="chat__item_avatar" src={img} alt="Avatar Men" />
    </div>
  );
}

export default ChatItemAvatarMen;
