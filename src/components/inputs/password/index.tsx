import React from "react";
import { Container } from "./styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import "./field.css";

type IPropsComponent = {};
type IInputPasswordControled = TextFieldProps & IPropsComponent;

const InputPasswordControled: React.FC<IInputPasswordControled> = (props) => {
  const {} = props;

  return <TextField className="InputTextControled" {...props} />;
};

export default InputPasswordControled;
