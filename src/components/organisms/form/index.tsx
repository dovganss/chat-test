import React, { useState } from "react";
import FormLogin from "../../molecules/form-login/index";
import FormPassword from "../../molecules/form-password/index";
import TitleBlock from "../../molecules/title-block";
import { Button } from "../../atomes/button";
import "./styles.css";
import { useForm } from "react-hook-form";

//function handleClick(event: any) {
// event.preventDefault();
//  console.log("Клик");

// window.location.assign("http://localhost:3000/chat");
//}

//interface IForm {
//  onChange: (value: string) => void;
// htmlFor: string;
// ref: string;
// id: string;
//  type: string;
//}

//export const Form: React.FC<IForm> = ({
// value,
// onChange,
// htmlFor,
// ref,
//  id,
// type,
//}) => {

export function Form() {
  const [loginValue, setLoginValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(event: any) {
    event.preventDefault();
    console.log("Клик");
    window.location.assign("http://localhost:3000/chat");
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <TitleBlock />
      <FormLogin
        name="login"
        type="text"
        id="login"
        htmlFor="login"
        value={loginValue}
        onChange={setLoginValue}
      />
      <FormPassword
        // {...register("password", { required: "Error" })}
        htmlFor="password"
        value={passwordValue}
        onChange={setPasswordValue}
      />
      <Button type="submit" />
    </form>
  );
}

export default Form;
