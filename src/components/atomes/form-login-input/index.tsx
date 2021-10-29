import React, { useState } from "react";
import "./styles.css";

interface ILoginInput {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export const LoginInput: React.FC<ILoginInput> = ({
  value,
  onChange,
  placeholder,
}) => {
  const [isLoginVisible] = useState<boolean>(false);

  return (
    <div>
      <input
        id="login"
        className="form__input"
        type={isLoginVisible ? "text" : "login"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};
