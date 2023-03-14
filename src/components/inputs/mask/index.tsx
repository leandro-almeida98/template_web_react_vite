import React from "react";
import { Container } from "./styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import "./field.css";
import { Controller } from "react-hook-form";
import MaskedInput from "react-text-mask";

type IPropsComponent = {
  control: any;
  required?: boolean;
  rules?: any;
  name: string;
  errors: any;
  defaultValue?: string;
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
    defaultValue,
    rules,
  } = props;
  const propsTextField = props;
  const isError = errors && errors[name];

  return (
    <Controller
      name={name}
      defaultValue={defaultValue ? defaultValue : ""}
      control={control}
      rules={Object.assign({ required: required }, rules)}
      render={({ field: { onChange, value } }) => {
        return (
          <MaskedInput
            onChange={onChange}
            mask={[
              "(",
              /[1-9]/,
              /\d/,
              /\d/,
              ")",
              " ",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
            render={(innerRef, props) => (
              <TextField
                className="InputTextControled"
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
                {...propsTextField}
                inputRef={innerRef}
              />
            )}
          />
        );
      }}
    />
  );
};

export default InputTextControled;
