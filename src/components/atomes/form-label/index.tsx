import React from "react";
import "./styles.css";

interface ILabel {
  label?: string;
  htmlFor: string;
}

export const Label: React.FC<ILabel> = ({ label, htmlFor }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="form__label">
        {label}
      </label>
    </div>
  );
};
