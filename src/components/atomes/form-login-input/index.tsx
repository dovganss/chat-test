import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";

interface ILoginInput {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  id: string;
  type: string;
  name: string;
}

export const LoginInput: React.FC<ILoginInput> = ({
  value,
  onChange,
  placeholder,
  id,
  type,
  name,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <input
        name={name}
        id={id}
        className="form__input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};
