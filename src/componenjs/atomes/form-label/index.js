import React from "react";
import "./styles.css";
export var Label = function (_a) {
    var label = _a.label;
    return (React.createElement("div", { className: "container" },
        React.createElement("label", null,
            React.createElement("p", { className: "form__label" }, label))));
};
