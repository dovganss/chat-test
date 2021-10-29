import React from "react";
import "./styles.css";

interface IChatItemUser {
  user: string;
}

export const ChatItemUser: React.FC<IChatItemUser> = ({ user }) => {
  return <div className="chat__item-user">{user}</div>;
};
