import React, { useState } from "react";
import { PasswordInput } from "../../atomes/form-password-input/index";
import { Label } from "../../atomes/form-label/index";

interface IPassword {
  value: string;
  onChange: (value: string) => void;
  htmlFor: string;
}

export const FormPassword: React.FC<IPassword> = ({
  value,
  onChange,
  htmlFor,
}) => {
  const [passwordValue, setPasswordValue] = useState<string>("");

  return (
    <div className="form-block">
      <Label htmlFor="password" label="Password" />
      <PasswordInput
        placeholder="Input user name"
        value={passwordValue}
        onChange={setPasswordValue}
      />
    </div>
  );
};

export default FormPassword;
