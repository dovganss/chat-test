import React from "react";
import "./styles.css";

interface IButton {
  type: string;
}

export const Button: React.FC<IButton> = ({ type }) => {
  return (
    <div>
      <button type="submit" className="form__button">
        Log In
      </button>
    </div>
  );
};
