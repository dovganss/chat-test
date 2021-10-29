import React, { useState } from "react";
import FormLogin from "../../molecules/form-login/index";
import FormPassword from "../../molecules/form-password/index";
import TitleBlock from "../../molecules/title-block";
import { Button } from "../../atomes/button";
import "./styles.css";
import { useForm } from "react-hook-form";

function handleSubmit(event: any) {
  event.preventDefault();
  console.log("Клик");

  window.location.assign("http://localhost:3000/chat");
}

function Form() {
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>(
    "Пароль не может быть пустым"
  );

  const { register } = useForm();

  return (
    <form className="form">
      <TitleBlock />
      <FormLogin value={loginValue} onChange={setLoginValue} />
      <FormPassword value={passwordValue} onChange={setPasswordValue} />
      <Button onClick={handleSubmit} />
    </form>
  );
}

export default Form;
