import React from "react";
import Title from "./../../atomes/title/index";
import Subtitle from "./../../atomes/subtitle/index";
import Logo from "../../atomes/logo";

function TitleBlock() {
  return (
    <div className="title-block">
      <Logo />
      <Title />
      <Subtitle />
    </div>
  );
}

export default TitleBlock;
