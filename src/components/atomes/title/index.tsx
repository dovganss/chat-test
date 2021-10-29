import React from "react";
import "./styles.css";

function Title() {
  return (
    <div>
      <h1 className="title">
        Wellcome to <span className="title--blue">Chatty</span>
        <span className="title--light-blue">!</span>
      </h1>
    </div>
  );
}

export default Title;
