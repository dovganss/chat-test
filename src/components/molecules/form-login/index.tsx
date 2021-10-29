import React, { useState } from "react";
import { LoginInput } from "../../atomes/form-login-input";
import { Label } from "../../atomes/form-label/index";

interface ILogin {
  value: string;
  onChange: (value: string) => void;
  htmlFor: string;
  id: string;
  type: string;
  name: string;
}

export const FormLogin: React.FC<ILogin> = ({
  value,
  onChange,
  htmlFor,
  id,
  type,
  name,
}) => {
  const [loginValue, setLoginValue] = useState<string>("");

  return (
    <div className="form-block">
      <Label htmlFor="login" label="User name" />
      <LoginInput
        name={name}
        id={id}
        type={type}
        placeholder="Input user name"
        value={loginValue}
        onChange={setLoginValue}
      />
    </div>
  );
};

export default FormLogin;
