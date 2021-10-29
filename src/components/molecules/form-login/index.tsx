import React, { useState } from "react";
import { LoginInput } from "../../atomes/form-login-input";
import { Label } from "../../atomes/form-label/index";

interface ILogin {
  value: string;
  onChange: (value: string) => void;
}

export const FormLogin: React.FC<ILogin> = ({
  value,
  onChange,
}) => {

  const [loginValue, setLoginValue] = useState<string>("");

  return (
    <div className="form-block">
      <Label label="User name" />
      <LoginInput
        placeholder="Input user name"
        value={loginValue}
        onChange={setLoginValue}
      />
    </div>
  );
}

export default FormLogin;
