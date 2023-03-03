import React from "react";
import { Container } from "./styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import "./field.css";
import { Controller } from "react-hook-form";

type IPropsComponent = {
  control: any;
  required?: boolean;
  rules?: any;
  name: string;
  errors: any;
  showError?: boolean;
};
type IInputTextControled = TextFieldProps & IPropsComponent;

const InputTextControled: React.FC<IInputTextControled> = (props) => {
  const {
    control,
    name,
    showError = true,
    required = true,
    errors,
    rules,
  } = props;
  const isError = errors && errors[name];

  return (
    <Controller
      name={name}
      control={control}
      rules={Object.assign({ required: required }, rules)}
      render={({ field: { onChange, value } }) => {
        return (
          <TextField
            className="InputTextControled"
            onChange={onChange}
            value={value}
            error={isError ? true : false}
            helperText={
              (showError && isError
                ? isError.message
                  ? isError.message
                  : "Campo obrigatório"
                : "") as unknown as React.ReactNode
            }
            {...props}
          />
        );
      }}
    />
  );
};

export default InputTextControled;
