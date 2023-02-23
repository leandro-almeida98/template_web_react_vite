import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface IBttnDefault extends ButtonProps {
  text: string;
}

const BttnDefault: React.FC<IBttnDefault> = (props) => {
  const { text } = props;

  return (
    <Button variant="contained" {...props}>
      {text}
    </Button>
  );
};

export default BttnDefault;
