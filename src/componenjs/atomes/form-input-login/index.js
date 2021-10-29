import React, { useState } from "react";
import "./styles.css";
export var LoginInput = function (_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder;
    var isLoginVisible = useState(false)[0];
    return (React.createElement("div", { className: "container" },
        React.createElement("input", { className: "form__input", type: isLoginVisible ? "text" : "login", value: value, placeholder: placeholder, onChange: function (e) {
                onChange(e.target.value);
            } })));
};
