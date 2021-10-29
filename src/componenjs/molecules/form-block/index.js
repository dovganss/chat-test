import React, { useState } from "react";
import { LoginInput } from "../../atomes/form-input-login";
import { PasswordInput } from "../../atomes/form-input-password/index";
import { Label } from "../../atomes/form-label/index";
function FormBlock() {
    var _a = useState(""), inputValue = _a[0], setInputValue = _a[1];
    return (React.createElement("div", { className: "form-block" },
        React.createElement(Label, { label: "Password" }),
        React.createElement(PasswordInput, { placeholder: "Input password", value: inputValue, onChange: setInputValue }),
        React.createElement(Label, { label: "Login" }),
        React.createElement(LoginInput, { placeholder: "Input login", value: inputValue, onChange: setInputValue })));
}
export default FormBlock;
