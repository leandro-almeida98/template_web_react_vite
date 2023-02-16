import React from "react";
import { Container } from "./styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type IPropsComponent = {};
type IInputTextControled = TextFieldProps & IPropsComponent;

const InputTextControled: React.FC<IInputTextControled> = (props) => {
  const {} = props;

  return <TextField {...props} />;
};

export default InputTextControled;
