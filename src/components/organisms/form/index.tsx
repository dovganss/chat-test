import React, { useState } from "react";
import { PasswordInput } from "../../atomes/form-input-password/index";
import { Label } from "../../atomes/form-label/index";
import { Button } from "../../atomes/button/index";

function FormBlock() {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="App">
      <Label label="Password" />
      <PasswordInput
        placeholder="Input password"
        value={inputValue}
        onChange={setInputValue}
      />
      <Button onChange={setInputValue} />
    </div>
  );
}

export default FormBlock;