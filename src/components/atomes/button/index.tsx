import React from "react";
import "./styles.css";
interface IButton {
  onChange: (value: string) => void;
}

export const Button: React.FC<IButton> = ({ onChange }) => {
  return (
    <div className="container">
      <button
        className="form__button"
        onClick={() => console.log("I was clicked!")}
      >
        Log In
      </button>
    </div>
  );
};
