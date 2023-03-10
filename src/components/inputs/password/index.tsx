import React from "react";
import "./field.css";
import { Controller } from "react-hook-form";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

type IPropsComponent = {
  control: any;
  required?: boolean;
  rules?: any;
  defaultValue?: string;
  name: string;
  errors: any;
  showError?: boolean;
  label: String;
};
type IInputPasswordControled = OutlinedInputProps & IPropsComponent;

const InputPasswordControled: React.FC<IInputPasswordControled> = (props) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const {
    control,
    name,
    label,
    showError = true,
    required = true,
    errors,
    defaultValue,
    rules,
  } = props;
  const isError = errors && errors[name];

  return (
    <>
      <FormControl style={{ width: "100%" }} variant="outlined">
        <InputLabel
          error={isError ? true : false}
          htmlFor="outlined-adornment-password"
        >
          {label}
        </InputLabel>

        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue ? defaultValue : ""}
          rules={Object.assign({ required: required }, rules)}
          render={({ field: { onChange, value } }) => {
            return (
              <OutlinedInput
                type={passwordVisible ? "text" : "password"}
                onChange={onChange}
                value={value}
                className="InputTextControled"
                error={isError ? true : false}
                {...props}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Altere a visibilidade do password"
                      onClick={() => {
                        setPasswordVisible(!passwordVisible);
                      }}
                      onMouseDown={() => {}}
                      edge="end"
                    >
                      {passwordVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            );
          }}
        />
      </FormControl>
      <div
        className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1wc848c-MuiFormHelperText-root"
        style={{
          display: "flex",
          marginRight: 0,
          paddingLeft: 14,
          width: "100%",
        }}
      >
        {
          (showError && isError
            ? isError.message
              ? isError.message
              : "Campo obrigatório"
            : "") as unknown as React.ReactNode
        }
      </div>
    </>
  );
};

export default InputPasswordControled;
