import React from "react";
import "./styles.css";
interface IButton {
  onClick: (e: React.MouseEvent) => void;
}

export function Button({ onClick }: IButton) {
  return (
    <div>
      <button className="form__button" onClick={onClick}>
        Log In
      </button>
    </div>
  );
}
