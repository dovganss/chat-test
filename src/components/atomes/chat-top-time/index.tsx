import React from "react";
import "./styles.css";

interface IChatTopTime {
  time: string;
}

export const ChatTopTime: React.FC<IChatTopTime> = ({ time }) => {
  return <p className="chat__top-time">Last seen {time} ago</p>;
};
