import React from "react";
import "./styles.css";

interface ILabel {
  label?: string;
}

export const Label: React.FC<ILabel> = ({ label }) => {
  return (
    <div className="container">
      <label>
        <p className="form__label">{label}</p>
      </label>
    </div>
  );
};
