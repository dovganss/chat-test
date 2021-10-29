import React, { useState } from "react";
import "./styles.css";

interface IPasswordInput {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export const PasswordInput: React.FC<IPasswordInput> = ({
  value,
  onChange,
  placeholder,
}) => {
  const [isPasswordVisible] = useState<boolean>(false);

  return (
    <div>
      <input
        className="form__input"
        type={isPasswordVisible ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};
