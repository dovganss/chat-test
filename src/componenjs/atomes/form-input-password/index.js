import React, { useState } from "react";
import "./styles.css";
export var PasswordInput = function (_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder;
    var isPasswordVisible = useState(false)[0];
    return (React.createElement("div", { className: "container" },
        React.createElement("input", { className: "form__input", type: isPasswordVisible ? "text" : "password", value: value, placeholder: placeholder, onChange: function (e) {
                onChange(e.target.value);
            } })));
};
